import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        cocktail: cocktailSlice,
        product: productSlice
    }
})