import React from "react";
import { getUniqueValues } from "../utils/constant";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, updateFilter, filter } from "../features/ProductSlice";
import { getAllProducts } from "../features/ProductSlice";
import { useEffect } from "react";

const Filter = () => {
  const { data, isSidebarOpen } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const colors = getUniqueValues(data, "color");
  const types = getUniqueValues(data, "type");
  return (
    <div
      className=" bg-white  transition-all duration-1000 ease-linear w-1/2 absolute p-[20px] mymd:w-1/4 mymd:static mymd:p-0"
      style={{ left: `${isSidebarOpen ? "0" : "-500px"}` }}
    >
      <h3
        className="p-[40px] pr-[50px] float-right inline-block mymd:hidden "
        onClick={() => dispatch(closeSidebar())}
      >
        <ImCross />
      </h3>
      <h2 className="text-3xl my-6">Filter Products</h2>
      <div>
        <h3 className="my-2 text-xl">Color</h3>
        <ul>
          {colors.map((item, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name=""
                id=""
                value={item}
                onChange={() => {
                  dispatch(updateFilter({ type: "colors", value: item }));
                }}
              />
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="my-2 text-xl">Gender</h3>
        <ul>
          <li>
            <input
              type="checkbox"
              name=""
              id=""
              value="Men"
              onChange={() =>
                dispatch(updateFilter({ type: "gender", value: "Men" }))
              }
            />
            <label htmlFor="">Men</label>
          </li>
          <li>
            <input
              type="checkbox"
              name=""
              id=""
              value="Women"
              onChange={() =>
                dispatch(updateFilter({ type: "gender", value: "Women" }))
              }
            />
            <label htmlFor="">Women</label>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="my-2 text-xl"> Type</h3>
        <ul>
          {types.map((item, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name=""
                id=""
                value={item}
                onChange={() =>
                  dispatch(updateFilter({ type: "types", value: item }))
                }
              />
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-[20px] w-[90%] p-[3%] border-0 rounded-sm text-white font-semibold text-base shadow-md bg-crimson-500 hover:bg-crimson-700 active:bg-crimson-500" onClick={() => dispatch(filter())}>
        Add Filters
      </button>
    </div>
  );
};

export default Filter;
