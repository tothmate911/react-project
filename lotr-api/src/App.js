import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './css/App.css';

import Book from './components/Book';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <h1>Lord of the Rings</h1>
        <Link to={{ pathname: '/books/1', id: '5cf5805fb53e011a64671582' }}>
          Book1
        </Link>
        {'  |  '}
        <Link to={{ pathname: '/books/2', id: '5cf58077b53e011a64671583' }}>
          Book2
        </Link>
        {'  |  '}
        <Link to={{ pathname: '/books/3', id: '5cf58080b53e011a64671584' }}>
          Book3
        </Link>
        {'  |  '}
        <Link to="/">Home</Link>
        <Route path="/books/:bookNumber" component={Book} />
      </div>
    </Router>
  );
};

export default App;
