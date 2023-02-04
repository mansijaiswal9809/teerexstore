import { configureStore } from "@reduxjs/toolkit";
import AllProducts  from "./features/ProductSlice";
import cart from "./features/CartSlice"
export const store=configureStore({
    reducer:{
        products:AllProducts,
        cart:cart
    }
})
