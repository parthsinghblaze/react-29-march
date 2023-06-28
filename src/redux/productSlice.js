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

export const deleteProduct = createAsyncThunk("deleteProduct", async ({id}, {dispatch}) => {
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)
        if(response.status === 200) {
            console.log(response.data)
            dispatch(fetchProduct());
        }
    } catch (error) {
        console.log('error', error);
    }
})

export const updateProduct = createAsyncThunk("updateProduct", async({formValue, editHandleClose}, {dispatch}) => {
    try {

        const {_id, name, qty, price, category} = formValue;

        const id = _id;

        const data = {
            name, 
            qty,
            price,
            category
        }

        const response = await axios.patch(`http://localhost:8000/product/${id}`, data)
        if(response.status === 200) {
            dispatch(fetchProduct());
            dispatch(editHandleClose());
        }
    } catch (error) {
        console.log("error", error);
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        filterProductList: [],
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
        },
        searchProduct: (state, action) => {
            const searchData = state.productList.filter((item) => item.name.toLowerCase().replace(" ", "").includes(action.payload.toLowerCase()))
            state.filterProductList = searchData
        }
    }, 
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.loading = true 
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.productList = action.payload.products
            state.filterProductList = action.payload.products
            state.loading = false 
        },
        [fetchProduct.rejected]: (state, action) => {
            state.loading = false
        }
    }
})

export const {startAddLoading, stopAddLoading, addErrorMessage, emptyErrorMessage, searchProduct} = productSlice.actions;

export default productSlice.reducer