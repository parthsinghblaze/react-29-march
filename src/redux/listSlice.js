import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        listData: [] 
    },
    reducers: {
        addItem: (state, action) => {
            state.listData.push(action.payload)
            // state.listData = [...state.listData, action.payload]
        }
    }
})

export const { addItem } = listSlice.actions

export default listSlice.reducer