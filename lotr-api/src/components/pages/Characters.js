import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

function Characters() {
  const dataContext = useContext(DataContext);
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const getCharacters = () => {
    if (!dataContext.isCharLoaded) {
      axios
        .get("https://the-one-api.dev/v2/character", {
          headers: {
            Authorization: "Bearer HVyql6qHzMTbJ1oJNo-5",
          },
        })
        .then((response) => {
          setFilteredCharacters(response.data.docs);
          setCharacters(response.data.docs);
          dataContext.setCharacters(response.data.docs);
          dataContext.setIsCharLoaded(true);
        });
    } else {
      setCharacters(dataContext.characters);
      setFilteredCharacters(dataContext.characters);
    }
  };

  const fetchData = () => {
    getCharacters();
  };

  useEffect(() => {
    fetchData();
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

  let charContainer = <span></span>;
  if (dataContext.isCharLoaded) {
    charContainer = listCharacters;
  }
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
      <div>{charContainer}</div>
    </React.Fragment>
  );
}

export default Characters;
