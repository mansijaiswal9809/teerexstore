import React from "react";
import { getUniqueValues } from "../utils/constant";
import { ImCross } from "react-icons/im";
import "../styles/filter.css";
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
      className="filter-container "
      style={{ left: `${isSidebarOpen ? "0" : "-500px"}` }}
    >
      <h3
        style={{ float: "right", paddingRight: "50px" }}
        className="filter-cross"
        onClick={() => dispatch(closeSidebar())}
      >
        <ImCross />
      </h3>
      <h2>Filter products</h2>
      <div>
        <h3>Color</h3>
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
        <h3>Gender</h3>
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
        <h3>Type</h3>
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
      <button className="clear-button" onClick={() => dispatch(filter())}>
        Add Filters
      </button>
    </div>
  );
};

export default Filter;
