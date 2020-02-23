import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import styled from "styled-components";

const NavH1 = styled.h1`
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 4px #000000;
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <NavH1>Crypto Tracker</NavH1>
      </Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
