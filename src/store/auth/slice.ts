import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './constants'
import { loginThunk } from './thunks'

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isAuthenticated = false
                state.isLoadingLogin = true
            })
            .addCase(loginThunk.fulfilled, (state) => {
                state.isAuthenticated = true
                state.isLoadingLogin = false
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isAuthenticated = false
                state.isLoadingLogin = false
            })
})

export default authSlice
