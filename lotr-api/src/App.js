import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Characters from './components/pages/Characters';
import Header from './components/layout/Header';
import MainPage from './components/pages/MainPage';
import Movie from './components/pages/Movie';
import styled from 'styled-components';
import Book from './components/pages/Book';
import Character from "./components/pages/Character";
import { ThemeContext } from './context/ThemeContext';
import AppTheme from './components/layout/Colors';

const App = (props) => {
  const [theme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const Main = styled.div`
    margin-top: 20px;
    margin-left: 20%;
    margin-right: 20%;
    text-align: left;
    background-color: ${currentTheme.backgroundColor};
    color: ${currentTheme.textColor};
    padding: 40px;
  `;

const App = (props) => {
    return (
        <div>
            <Router>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Main>
                    <Route exact path="/characters" component={Characters}/>
                    <Route path="/character/:id" component={Character}/>
                    <Route path="/movie/:id" component={Movie}/>
                    <Route path="/book/:id" component={Book}/>
                </Main>
            </Router>
        </div>
    );
  const containerStyle = {
    backgroundColor: `${currentTheme.backgroundColor2}`,
  };

  return (
    <div style={containerStyle}>
      <Router>
        <Header />
        <Route exact path="/" component={MainPage} />
        <Main>
          <Route exact path="/characters" component={Characters} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/book/:id" component={Book} />
        </Main>
      </Router>
    </div>
  );
};

export default App;
