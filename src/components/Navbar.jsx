import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>TeeRex Store</div>
      <div className="navbar-links">
        <Link to="/">Products</Link>
        <Link to="/cart">
          <FaShoppingCart size="25px" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
