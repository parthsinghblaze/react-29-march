import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        profile: profileSlice,
        product: productSlice
    }
})