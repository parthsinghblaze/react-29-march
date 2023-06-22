import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProducts', async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        return response.data.data
    } catch (error) {
        console.log('error', error);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        loading: true 
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.loading = true 
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.productList = action.payload.products
            state.loading = false 
        },
        [fetchProduct.rejected]: (state, action) => {
            state.loading = false
        }
    }
})

export default productSlice.reducer