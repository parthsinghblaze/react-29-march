import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalItem: 0 
    },
    reducers: {
        increment: (state, action) => {
            state.totalItem = state.totalItem + Number(action.payload)
        },
        decrement: (state, action) => {
            state.totalItem = state.totalItem - Number(action.payload)
        }
    }
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer