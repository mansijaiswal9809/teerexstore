import React from "react";
import { ImSearch } from "react-icons/im";
import "../styles/search.css";
import { FaFilter } from "react-icons/fa";
import { useProductContext } from "../context/ProductProvider";
import { useState } from "react";

const Search = () => {
    const {openSidebar,searchProducts,getAllProducts}= useProductContext()
    const [val,setVal]= useState("")
  return (
    <div className="search">
      <div className="filter-div" onClick={openSidebar}>
        <FaFilter size="25px" color="crimson" />
      </div>
      <div className="search-container">
        <input type="search" placeholder="Search..." onChange={(e)=>setVal(e.target.value)}/>
        <button className="search-button" onClick={()=>searchProducts(val)}><ImSearch size="25px" color="crimson"/></button>
      </div>
      <button className="AllProductsButton" onClick={getAllProducts}>Get All Products</button>
    </div>
  );
};

export default Search;
