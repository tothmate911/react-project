import React from "react";
import "./css/App.css";
import Header from "./components/layout/Header";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
`;

import './css/App.css';

import Book from './components/Book';

const App = (props) => {
  return (
    <div>
      <Header />
      <Main></Main>
    </div>
  );
};

export default App;
