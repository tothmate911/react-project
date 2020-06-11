import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DataContext } from "../../context/DataContext";

const themeTogglerStyle = {
  padding: "30px",
  cursor: "pointer",
};

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const dataContext = useContext(DataContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    dataContext.setIsBookLoaded(false);
    dataContext.setIsMovieLoaded(false);
  };

  return (
    <div style={themeTogglerStyle} onClick={toggleTheme}>
      <span title="switch theme">{theme === "light" ? "🌙" : "☀️"}</span>
    </div>
  );
};

export default ThemeToggler;
