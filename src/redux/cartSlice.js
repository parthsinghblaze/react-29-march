import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalItem: 10 
    },
    reducers: {
        increment: (state) => {
            state.totalItem = state.totalItem + 1
        },
        decrement: (state) => {
            state.totalItem = state.totalItem - 1
        }
    }
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer