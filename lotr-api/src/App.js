import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Characters from "./components/pages/Characters";
import Header from "./components/layout/Header";
import MainPage from "./components/pages/MainPage";
import Movie from "./components/pages/Movie";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
  background-color: white;
  padding: 40px;
`;

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Main>
          <Route exact path="/characters" component={Characters} />
          <Route path="/movie/:id" component={Movie} />
        </Main>
      </Router>
    </div>
  );
}

export default App;
