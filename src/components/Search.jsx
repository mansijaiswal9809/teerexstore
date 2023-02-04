import React from "react";
import { ImSearch } from "react-icons/im";
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
    <div className="flex align-middle gap-5">
      <div className="inline-block p-[10px] mymd:hidden" onClick={() => dispatch(showSideBar())}>
        <FaFilter size="25px" color="crimson" />
      </div>
      <div className="my-5 w-[90%] mymd:w-2/5 flex justify-between align-middle rounded-[30px] border-2 border-gray-300 border-solid bg-red-200">
        <input
        className="w-[90%] border-0 text-crimson-700 p-2 text-lg outline-none bg-red-200 rounded-[30px]"
          type="search"
          placeholder="Search..."
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="bg-transparent border-0 pr-4"

          onClick={() => dispatch(searchProducts({ val }))}
        >
          <ImSearch size="25px" color="crimson" />
        </button>
      </div>
      <button
        className="mt-[20px] w-40 p-0 bg-crimson-500 border-0 rounded-md text-white font-semibold text-base shadow-lg justify-end hover:bg-crimson-700 active:bg-crimson-500"
        onClick={() => dispatch(AllProducts())}
      >
        Get All Products
      </button>
    </div>
  );
};

export default Search;
