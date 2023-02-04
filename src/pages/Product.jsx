import React from "react";
import {Filter,Products,Search} from "../components"
const Product = () => {
  return (
    <div className="flex p-0 mymd:px-4 mylg:px-10 ">
        <Filter />
      <div>
        <Search />
        <Products />
      </div>
    </div>
  );
};

export default Product;
