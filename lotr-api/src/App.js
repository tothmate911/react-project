import React from "react";
import "./css/App.css";
import Header from "./components/layout/Header";
import MainPage from "./components/pages/MainPage";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = styled.div`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
`;

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <MainPage />
            </React.Fragment>
          )}
        />
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;
