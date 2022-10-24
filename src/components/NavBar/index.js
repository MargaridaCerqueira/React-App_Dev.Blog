import { NavLink } from "react-router-dom";
import "./navbar.css";

function navbar(props) {
  return (
    <header className="header__container">
      <div className="logo">
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </div>
      <div className="navbar">
        <div className="navbar__menu">
          <ul className="navbar__links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </div>

        {
          <button
            className="switch-button"
            title="Switch between dark and light mode"
            aria-label="Switch between dark and light mode"
            onClick={props.handleThemeChange}
          >
            {props.theme === "light" ? "🌙 Dark " : "☀️ Light "} Theme
          </button>
        }
      </div>
    </header>
  );
}

export default navbar;
