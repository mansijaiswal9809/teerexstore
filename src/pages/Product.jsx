import React from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Search from "../components/Search";
import '../styles/product.css'

const Product = () => {
  return (
    <div className="productPage_container">
        <Filter />
      <div>
      <Search />
        <Products />
      </div>
    </div>
  );
};

export default Product;
