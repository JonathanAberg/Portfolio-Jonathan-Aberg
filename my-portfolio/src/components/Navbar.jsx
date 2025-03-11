import React from "react";
import { NavLink } from "react-router-dom";
import "/src/styles/navbar.css";

const Navbar = () => (
  <header className="navbar">
    <nav>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
