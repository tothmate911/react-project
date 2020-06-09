import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";

const NavBar = styled.div`
  height: 120px;
  background-color: white;
  margin-right: 60px;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
  margin-top: 20px;
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
  width: 180px;
  height: 120px;
  background-color: white;
  color: black;
  font-size: 16px;
  border: none;
  &:hover {
    color: gray;
  }
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const ButtonTitle = styled.div`
  margin-top: 80px;
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
    <NavBar>
      <Router>
        <Button>
          <ButtonTitle>BOOKS</ButtonTitle>
          <DropdownContent>{bookList}</DropdownContent>
        </Button>
        <Button>
          <ButtonTitle>MOVIES</ButtonTitle>
          <DropdownContent>{movieList}</DropdownContent>
        </Button>
        <Button>
          <ButtonTitle>CHARACTERS</ButtonTitle>
          <Route path="/characters"></Route>
        </Button>
      </Router>
    </NavBar>
  );
}
