import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
