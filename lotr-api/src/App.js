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

function App() {
  return (
    <div>
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
