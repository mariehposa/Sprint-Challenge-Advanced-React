import React, { useState } from 'react';
import {DarkMode} from '../Hooks/DarkMode';

export default function NavBar () {
  const [darkMode, setDarkMode] = DarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    //console.log(darkMode); 
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
