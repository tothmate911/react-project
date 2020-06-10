import React, {useEffect, useState} from "react";
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

    function sort(event) {
        if(event.target.value === 'ascending'){
            characters.sort((a,b) => (a.name > b.name) ? 1: -1)
            event.target.value = 'descending'
        }else{
            characters.sort((a,b) => (a.name < b.name) ? 1: -1)
            event.target.value = 'ascending'
        }
    }

    const handleQuery = (event) => {
        const fieldInput = event.target.value
        if (event.key === 'Enter') {
            filterCharacter(fieldInput)
        }
    }

    function filterCharacter(characterName) {
        const filteredChar = characters.filter(item => item.name === characterName)
        setCharacters(filteredChar)
    }

    const listCharacters = characters.map((item) => (
        <div style={cardStyle} key={item._id}>
            {item.name} <br/>
            {item.birth} <br/>
            {item.death} <br/>
            {item.gender} <br/>
            {item.race} <br/>
            <a href={item.wikiUrl} target="_blank">
                {item.wikiUrl}
            </a>
        </div>
    ));

    return <React.Fragment>
        <button onClick={sort} value={'ascending'}>Sort by name</button>
        <input onKeyPress={handleQuery} name='inputField' type="text" placeholder='Search...' defaultValue={''}/>
        <div style={flexContainerStyle}>
            {listCharacters}
        </div>
    </React.Fragment>
}


export default Characters;
