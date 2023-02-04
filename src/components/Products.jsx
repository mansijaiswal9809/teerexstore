import React from "react";
import ProductCard from "./ProductCard";
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
    <div className="w-3/4">
      {isLoading && <div>loading...</div>}
      <div className="grid grid-cols-1 mysm:grid-cols-2 mylg:grid-cols-3 mymd:w-[75vw] w-screen gap-3">
        {filteredData.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      {isError && <div>Oops! Something went Wrong! try Again Later...</div>}
    </div>
  );
};

export default Products;
