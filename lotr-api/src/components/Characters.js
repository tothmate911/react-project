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
    })
    console.log(characters)
    const iter = characters.map((item) => (
            <li key={item.id}>{item.name}</li>
        )
    )

    return (
        <div>
            {iter}
        </div>
    )
}

export default Characters;