import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  & a:hover {
    background-color: #ddd;
  }
`;

const Button = styled.div`
  position: relative;
  display: inline-block;
  background-color: #2f4f4f;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: #253f3f;
  }
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export default function Navigation() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/book", {
        headers: {
          Authorization: "Bearer pmF8BDZT97okBAtf7_Ui",
        },
      })
      .then((response) => setBooks(response.data.docs));
  });
  console.log(books);
  const bookList = books.map((item) => (
    <Link key={item.id} to={"/book/" + item.id}>
      {item.name}
    </Link>
  ));

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/movie", {
        headers: {
          Authorization: "Bearer pmF8BDZT97okBAtf7_Ui",
        },
      })
      .then((response) => setMovies(response.data.docs));
  });
  console.log(movies);
  const movieList = movies.map((item) => (
    <Link key={item.id} to={"/movie/" + item.id}>
      {item.name}
    </Link>
  ));

  return (
    <div>
      <Router>
        <Button>
          <span>Books</span>
          <DropdownContent>{bookList}</DropdownContent>
        </Button>
        <Button>
          <span>Movies</span>
          <DropdownContent>{movieList}</DropdownContent>
        </Button>
        <Button>
          <span>Characters</span>
          <Route path="/characters"></Route>
        </Button>
      </Router>
    </div>
  );
}
