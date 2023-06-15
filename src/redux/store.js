import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer: {
        cocktail: cocktailSlice,
        product: productSlice,
        auth: authSlice
    }
})