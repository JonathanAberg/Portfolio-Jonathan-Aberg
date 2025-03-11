import React from "react";
import { NavLink } from "react-router-dom";
import "/src/styles/header.css";

const Header = () => (
  <header className="header">
    <div>
      <h1>
        <NavLink to="/">My Portfolio</NavLink>
      </h1>
    </div>
  </header>
);

export default Header;
