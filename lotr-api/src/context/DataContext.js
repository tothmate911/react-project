import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [bookMenu, setBookMenu] = useState([]);
  const [isBookLoaded, setIsBookLoaded] = useState(false);

  const [movieMenu, setMovieMenu] = useState([]);
  const [isMovieLoaded, setIsMovieLoaded] = useState(false);

  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);

  return (
    <DataContext.Provider
      value={{
        bookMenu,
        setBookMenu,
        isBookLoaded,
        setIsBookLoaded,
        movieMenu,
        setMovieMenu,
        isMovieLoaded,
        setIsMovieLoaded,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
