import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        productDetails: {}
    }
})

export default productSlice.reducer