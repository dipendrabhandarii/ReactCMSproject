import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/CreateBlogs">Add Blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
