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

export const addProduct = createAsyncThunk('addProduct', async ({formValue, handleClose}, {dispatch}) => {
    dispatch(startAddLoading());
    try {
        const response = await axios.post('http://localhost:8000/product', formValue)
        if(response.status === 200) {
            handleClose();
            dispatch(fetchProduct());
        }
        dispatch(stopAddLoading());
    } catch (error) {
        dispatch(stopAddLoading());
        dispatch(addErrorMessage(error.response.data.message));
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        loading: true,
        addProductLoading: false,
        error: ""
    },
    reducers: {
        startAddLoading: (state, action) => {
            state.addProductLoading = true
        },
        stopAddLoading: (state, action) => {
            state.addProductLoading = false
        },
        addErrorMessage: (state, action) => {
            state.error = action.payload
        },
        emptyErrorMessage: (state, action) => {
            state.error = ""
        }
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

export const {startAddLoading, stopAddLoading, addErrorMessage, emptyErrorMessage} = productSlice.actions;

export default productSlice.reducer