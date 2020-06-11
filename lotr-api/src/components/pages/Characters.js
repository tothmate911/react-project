import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/character", {
        headers: {
          Authorization: "Bearer pmF8BDZT97okBAtf7_Ui",
        },
      })
      .then((response) => {
        setFilteredCharacters(response.data.docs);
        setCharacters(response.data.docs);
      });
  }, []);

  /*    const flexContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "lightGrey",
    };
    const cardStyle = {
        backgroundColor: "#f1f1f1",
        margin: "1%",
        padding: "1%",
        fontSize: "100%",
        borderRadius: "5px",
    };*/

  const sorter = (event) => {
    if (event.target.value === "ascending") {
      setFilteredCharacters(
        [...characters].sort((a, b) => (a.name > b.name ? 1 : -1))
      );
      event.target.value = "descending";
    } else {
      setFilteredCharacters(
        [...characters].sort((a, b) => (a.name < b.name ? 1 : -1))
      );
      event.target.value = "ascending";
    }
  };

  const handleQuery = (event) => {
    const fieldInput = event.target.value.toLowerCase();
    const searchedChar = characters.filter((item) =>
      item.name.toLowerCase().includes(fieldInput)
    );
    if (fieldInput !== "") {
      setFilteredCharacters(searchedChar);
    } else {
      setFilteredCharacters(characters);
    }
  };

  const listCharacters = filteredCharacters.map((item) => (
    <div key={item._id}>
      <Link to={`/character/${item._id}`}>
        <li>{item.name}</li>
      </Link>
    </div>
  ));

  return (
    <React.Fragment>
      <button onClick={sorter} value={"ascending"}>
        Sort by name
      </button>
      <input
        onChange={handleQuery}
        name="inputField"
        type="text"
        placeholder="Search..."
      />
      <div>{listCharacters}</div>
    </React.Fragment>
  );
}

export default Characters;
