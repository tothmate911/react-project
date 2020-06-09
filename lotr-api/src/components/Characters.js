import React, {useEffect, useState} from "react";
import axios from 'axios';

function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://the-one-api.herokuapp.com/v1/character', {
            headers: {
                Authorization: 'Bearer pmF8BDZT97okBAtf7_Ui'
            }
        })
            .then(response => setCharacters(response.data.docs))
    },[])

    const iter = characters.map((item) => (
            <div>
                {item.name} <br/>
                {item.birth} <br/>
                {item.death} <br/>
                {item.gender} <br/>
                {item.race} <br/>
                {item.wikiUrl}
            </div>
            //<li key={item.id}>{item.name}</li>
        )
    )

    return (
        <div>
            {iter}
        </div>
    )
}

export default Characters;