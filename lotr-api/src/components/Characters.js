import React, {useEffect, useState} from "react";
import axios from 'axios';

function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.post('https://the-one-api.herokuapp.com/v1/character',{
            headers:{
                Authorization: 'pmF8BDZT97okBAtf7_Ui'
            }
        })
            .then(response => console.log(response))
    })
    return(
        <div>aaaaaaaaa</div>
    )
}

export default Characters;