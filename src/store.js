import { configureStore } from "@reduxjs/toolkit";
import AllProducts  from "./features/ProductSlice";

export const store=configureStore({
    reducer:{
        products:AllProducts,
    }
})
