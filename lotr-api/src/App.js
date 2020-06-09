import React from "react";
import "./css/App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Characters from "./components/Characters";

function App() {

    return (
        <div className="App">
            <Router>
                <Route path='/characters'>
                    <div>This is the characters route!!!!</div>
                    <Characters />
                </Route>
            </Router>
        </div>
    );
}

export default App;
