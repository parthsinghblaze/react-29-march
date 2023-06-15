import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

export const login = createAsyncThunk('login', async ({formValue, navigate}) => {
    try {
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPsPW8gaK4n9fSdHo1G-KCT6jDCJc30s0', formValue)
        console.log('response', response);
        if(response.status === 200) {
            navigate("/");
        }
    } catch (error) {
        alert(error.response.data.error.message)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
    },
    reducers: {

    }
})

export default authSlice.reducer