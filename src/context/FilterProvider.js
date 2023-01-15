import React, { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./ProductProvider";
import reducer from "../reducer/filterReducer";
import {
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  GET_FILTERED_DATA,
  UPDATE_COLORS,
  UPDATE_GENDERS,
  UPDATE_PRICES,
  UPDATE_TYPES,
} from "../utils/action";
import { useEffect } from "react";
const filterContext = createContext();

const initialState = {
  filteredData: [],
  colors: ["all"],
  types: ["all"],
  genders: ["all"],
  minPrice: 0,
  maxPrice: 0,
  price: 0,
};
export const FilterProvider = ({ children }) => {
  const { data } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const getFilteredData = () => {
    dispatch({ type: GET_FILTERED_DATA, payload: data });
  };
  useEffect(() => {
    getFilteredData();
  }, [data]);

  const updateFilter = (type, value) => {
    if (type === "colors") {
      // console.log(value)
      dispatch({ type: UPDATE_COLORS, payload: value });
    } else if (type === "gender") {
      dispatch({ type: UPDATE_GENDERS, payload: value });
    } else if (type === "types") {
      dispatch({ type: UPDATE_TYPES, payload: value });
    } else if (type === "price") {
      dispatch({ type: UPDATE_PRICES });
    }
  };
  const filter = () => {
    dispatch({ type: FILTER_PRODUCTS, payload: data });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
    dispatch({ type: FILTER_PRODUCTS, payload: data })
  };
  //   console.log(state.colors);
  //   console.log(state.filteredData);
  return (
    <filterContext.Provider
      value={{ ...state, updateFilter, filter, clearFilter }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => useContext(filterContext);