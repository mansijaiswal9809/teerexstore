import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";

const ProductContext = createContext();

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    try {
      dispatch({ type: "IS_LOADING" });
      let data = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      data = await data.json();
      dispatch({type:"SET_DATA",payload:data})
    //   console.log(data);
    } catch(error) {
        dispatch({type:"IS_ERROR",payload:error})
        console.log(error)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
//   console.log(state.data)
  return <ProductContext.Provider value={{...state}}>{children}</ProductContext.Provider>;
};
export const useProductContext=()=>useContext(ProductContext)
