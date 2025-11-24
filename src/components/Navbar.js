import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">JA</div>
      </div>

      <ul className="nav-menu">
        <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/converter" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Converter</NavLink></li>
        <li><NavLink to="/reference" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Reference</NavLink></li>
        <li><NavLink to="/extras" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Extras</NavLink></li>
      </ul>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
