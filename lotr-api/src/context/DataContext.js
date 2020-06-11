import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [bookMenu, setBookMenu] = useState([]);
  const [books, setBooks] = useState([]);
  const [movieMenu, setMovieMenu] = useState([]);
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  return (
    <DataContext.Provider
      value={[
        bookMenu,
        setBookMenu,
        books,
        setBooks,
        movieMenu,
        setMovieMenu,
        movies,
        setMovies,
        characters,
        setCharacters,
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
