import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/day1">Day 1</Link>
      <Link to="/day2">Day 2</Link>
      <Link to="/day3">Day 3</Link>
      <Link to="/day4">Day 4</Link>
    </nav>
  );
};

export default Nav;
