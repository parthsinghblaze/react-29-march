import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function getLocalStorage() {
    const isLogin = localStorage.getItem('appLogin')
    if(isLogin) {
        return true 
    } else {
        return false
    }
}

// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

export const login = createAsyncThunk('login', async ({formValue, navigate}, { dispatch }) => {
    try {
        dispatch(startLoading());
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPsPW8gaK4n9fSdHo1G-KCT6jDCJc30s0', formValue)
        if(response.status === 200) {
            navigate("/");
            dispatch(loginSuccess())
        }
    } catch (error) {
        dispatch(loginFail(error.response.data.error.message))
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        isLogin: getLocalStorage(),
        errorMessage: ''
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true 
        },
        loginSuccess: (state, action) => {
            localStorage.setItem('appLogin', 'true')
            state.loading = false 
            state.isLogin = true
        },
        loginFail: (state, action) => {
            let errorMessage = action.payload; 
            if(errorMessage === 'INVALID_PASSWORD' || errorMessage === 'EMAIL_NOT_FOUND') {
                errorMessage = 'Email or password are incorrect!';
            }
            state.loading = false 
            state.errorMessage = errorMessage
        },
        logout: (state, action) => {
            localStorage.removeItem('appLogin');
            state.isLogin = false
        }
    },
})

export const { startLoading, loginSuccess, loginFail, logout } = authSlice.actions

export default authSlice.reducer