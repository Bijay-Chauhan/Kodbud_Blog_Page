import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">
        <Link to="/">TechBlog</Link>
      </h2>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/articles" onClick={() => setMenuOpen(false)}>
            Articles
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
