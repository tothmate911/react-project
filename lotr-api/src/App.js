import React from "react";
import "./css/App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Characters from "./components/Characters";
import Header from "./components/layout/Header";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
`;

function App() {

    return (
        <div className="App">
            <Router>
            <Header />
            <Main></Main>
                <Route path='/characters'>
                    <div>This is the characters route!!!!</div>
                    <Characters />
                </Route>
            </Router>
        </div>
    );
}

export default App;
