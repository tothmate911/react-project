import React from 'react';
import './css/App.css';
import Header from './components/layout/Header';
import styled from 'styled-components';
import Book from './components/Book';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = styled.div`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: left;
`;

const App = (props) => {
  return (
    <div>
      <Router>
        <Header />
        <Main>
          <Route path="/book/:id" component={Book} />
        </Main>
      </Router>
    </div>
  );
};

export default App;
