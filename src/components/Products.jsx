import React from "react";
import ProductCard from "./ProductCard";
import "../styles/products.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredData } from "../features/ProductSlice";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, filteredData, products } = useSelector(
    (store) => store.products
  );
  useEffect(() => {
    dispatch(getFilteredData());
  }, [products]);
  return (
    <div style={{ width: "75vw" }}>
      {isLoading && <div>loading...</div>}
      <div className="All-products">
        {filteredData.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      {isError && <div>Oops! Something went Wrong! try Again Later...</div>}
    </div>
  );
};

export default Products;
