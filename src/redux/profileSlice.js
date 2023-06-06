import { createSlice } from "@reduxjs/toolkit";
import img1 from '../car3.jpg'
import img2 from '../car2.jpg'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: "Nikhil",
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { changeName, removeImage } = profileSlice.actions

export default profileSlice.reducer