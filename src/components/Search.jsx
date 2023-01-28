import React from "react";
import { ImSearch } from "react-icons/im";
import "../styles/search.css";
import { FaFilter } from "react-icons/fa";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  showSideBar,
  AllProducts,
  searchProducts,
} from "../features/ProductSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  return (
    <div className="search">
      <div className="filter-div" onClick={() => dispatch(showSideBar())}>
        <FaFilter size="25px" color="crimson" />
      </div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => dispatch(searchProducts({ val }))}
        >
          <ImSearch size="25px" color="crimson" />
        </button>
      </div>
      <button
        className="AllProductsButton"
        onClick={() => dispatch(AllProducts())}
      >
        Get All Products
      </button>
    </div>
  );
};

export default Search;
