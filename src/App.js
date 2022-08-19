import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import useLocalStorage from "use-local-storage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

export default function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <NavBar theme={theme} handleThemeChange={switchTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
