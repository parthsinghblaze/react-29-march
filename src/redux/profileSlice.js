import { createSlice } from "@reduxjs/toolkit";
import img1 from '../car3.jpg'
import img2 from '../car2.jpg'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: "Nikhil",
        address: "Surat",
        image: img1
    },
    reducers: {
        changeName: (state) => {
            state.name = "Suraj"
            state.image = img2
        }
    }
})

export const { changeName } = profileSlice.actions

export default profileSlice.reducer