import React, { useEffect, useState } from "react";
import axios from "axios";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/character", {
        headers: {
          Authorization: "Bearer pmF8BDZT97okBAtf7_Ui",
        },
      })
      .then((response) => setCharacters(response.data.docs));
  }, []);

  const flexContainerStyle = {
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
  };

  const sortedList = characters.sort((a,b) => (a.name > b.name) ? 1: -1)

  const iter = characters.map((item) => (
    <div style={cardStyle}>
      {item.name} <br />
      {item.birth} <br />
      {item.death} <br />
      {item.gender} <br />
      {item.race} <br />
      <a href={item.wikiUrl} target="_blank">
        {item.wikiUrl}
      </a>
    </div>
    //<li key={item.id}>{item.name}</li>
  ));

  return <div style={flexContainerStyle}>{iter}</div>;
}

export default Characters;
