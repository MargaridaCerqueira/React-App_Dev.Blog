import { NavLink } from "react-router-dom";

import "./navbar.css";

function navbar(props) {
  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </div>
      <div className="navbar">
        <div className="navbar__menu">
          <ul className="navbar__links">
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </div>
        <button className="switch-button" onClick={props.handleThemeChange}>
          {props.theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </header>
  );
}

export default navbar;
