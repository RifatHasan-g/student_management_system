import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>DBMS</h1>

      <div className="navlink">
        <NavLink activeClass="active" className="link" to="/">
          Student
        </NavLink>
        <NavLink activeClass="active" className="link" to="/course">
          Course
        </NavLink>
        <NavLink activeClass="active" className="link" to="/department">
          Department
        </NavLink>
        <NavLink activeClass="active" className="link" to="/inner">
          Query
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;

/* <NavLink activeClass="active" className="link" to="/About">
          About
        </NavLink>
        <NavLink activeClass="active" className="link" to="/Contact">
          Contact
        </NavLink> */
