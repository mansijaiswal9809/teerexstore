import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";
import { CLOSE_SIDEBAR, GET_ALL_PRODUCTS, IS_ERROR, IS_LOADING, OPEN_SIDEBAR, SEARCH_PRODUCTS, SET_DATA } from "../utils/action";

const ProductContext = createContext();

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  isSidebarOpen:false,
  products:[]
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar=()=>{
    dispatch({type:OPEN_SIDEBAR})
  }
  const closeSidebar=()=>{
    dispatch({type:CLOSE_SIDEBAR})
  }
  const searchProducts=(text)=>{
    let Data=state.data
    dispatch({type:SEARCH_PRODUCTS,payload:{text,Data}})
  }
  const getAllProducts=()=>{
    dispatch({type:GET_ALL_PRODUCTS,payload:state.data})
  }
  const fetchData = async () => {
    try {
      dispatch({ type: IS_LOADING });
      let data = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      data = await data.json();
      dispatch({type:SET_DATA ,payload:data})
    //   console.log(data);
    } catch(error) {
        dispatch({type:IS_ERROR,payload:error})
        console.log(error)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <ProductContext.Provider value={{...state,openSidebar,closeSidebar,searchProducts,getAllProducts}}>{children}</ProductContext.Provider>;
};
export const useProductContext=()=>useContext(ProductContext)
