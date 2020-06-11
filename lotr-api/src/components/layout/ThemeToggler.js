import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const themeTogglerStyle = {
  cursor: 'pointer',
};

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={themeTogglerStyle} onClick={toggleTheme}>
      <span title="switch theme">{theme === 'light' ? '🌙' : '☀️'}</span>
    </div>
  );
};

export default ThemeToggler;
