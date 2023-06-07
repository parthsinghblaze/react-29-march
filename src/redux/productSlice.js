import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        loading: true 
    },
    reducers: {
        
    }
})

export default productSlice.reducer