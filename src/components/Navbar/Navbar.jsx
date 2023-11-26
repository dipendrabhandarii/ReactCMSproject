import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Createblogs">Add Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
