import React from "react";
import { useProductContext } from "../context/ProductProvider";
import { getUniqueValues } from "../utils/constant";
import { ImCross } from "react-icons/im";
import "../styles/filter.css";

const Filter = () => {
  const { isLoading, data, isError } = useProductContext();
  const colors = getUniqueValues(data, "color");
  const types = getUniqueValues(data, "type");
  return (
    <div className="filter-container">
      <h3 style={{float:"right",paddingRight:"50px",display:"none"}}><ImCross /></h3>
      <h2>Filter products</h2>
      <div>
        <h3>Color</h3>
        <ul>
          {colors.map((item, i) => (
            <li key={i}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Gender</h3>
        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Men</label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Women</label>
          </li>
        </ul>
      </div>
      <div>
        <h3>Type</h3>
        <ul>
          {types.map((item, i) => (
            <li key={i}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">{item}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Price Range</h3>
        <input type="range" name="" id="" />
      </div>
      <button className="clear-button">Add Filters</button>
      <button className="clear-button">Clear Filters</button>
    </div>
  );
};

export default Filter;
