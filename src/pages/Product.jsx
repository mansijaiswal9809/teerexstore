import React from "react";
import '../styles/product.css'
import {Filter,Products,Search} from "../components"
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
