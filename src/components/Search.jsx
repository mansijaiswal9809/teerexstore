import React from "react";
import { ImSearch } from "react-icons/im";
import "../styles/search.css";
import { FaFilter } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <div className="filter-div">
        <FaFilter size="25px" color="crimson" />
      </div>
      <div className="search-container">
        <input type="search" name="" id="" placeholder="Search..." />
        <ImSearch size="25px" />
      </div>
    </div>
  );
};

export default Search;
