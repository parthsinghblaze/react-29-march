import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";
import listSlice from "./listSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        profile: profileSlice,
        product: productSlice,
        list: listSlice
    }
})