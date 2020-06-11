import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../context/ThemeContext';
import AppTheme from '../layout/Colors';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://the-one-api.herokuapp.com/v1/character', {
        headers: {
          Authorization: 'Bearer pmF8BDZT97okBAtf7_Ui',
        },
      })
      .then((response) => setCharacters(response.data.docs));
  }, []);

  const [theme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const flexContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'lightGrey',
  };

  const cardStyle = {
    backgroundColor: `${currentTheme.dropDownBackgroundColor}`,
    margin: '1%',
    padding: '1%',
    fontSize: '100%',
    borderRadius: '5px',
  };

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
