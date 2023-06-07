import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCocktailList = createAsyncThunk("getAllCocktailList", async () => {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        const data = await response.json()
        return data.drinks
    } catch (error) {
        console.log('error', error)
    }
})

const cocktailSlice = createSlice({
    name: "cocktail",
    initialState: {
        cocktailList: [],
        loading: true 
    },
    reducers: {
        
    },
    extraReducers: {
        [getCocktailList.pending]: (state, action) => {
            state.loading = true 
        },
        [getCocktailList.fulfilled]: (state, action) => {
            state.loading = false 
            state.cocktailList = action.payload
        },
        [getCocktailList.rejected]: (state, action) => {
            state.loading = false
        }
    }
})

export default cocktailSlice.reducer