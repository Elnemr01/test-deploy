import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxToolkit/slices/productSlics"
import cartSlice from "../reduxToolkit/slices/cartSlice"

export let store =configureStore ({
    reducer :{
        products : productSlice,
        cart: cartSlice,
    }
})