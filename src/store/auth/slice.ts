import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './constants'
import { initalAuthThunk, loginThunk, registerThunk } from './thunks'
import { AuthType } from './types'

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuth: (state) => {
            state.isLoadingAuth = false
            state.isAuthenticated = false
            state.userInfo = undefined
        },
        setAuthenticated: (
            state,
            action: PayloadAction<AuthType['userInfo']>
        ) => {
            state.isAuthenticated = true
            state.isLoadingAuth = false
            state.userInfo = action.payload
        }
    },
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
            .addCase(registerThunk.pending, (state) => {
                state.isLoadingRegister = true
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state.isLoadingRegister = false
            })
            .addCase(registerThunk.rejected, (state) => {
                state.isLoadingRegister = false
            })
            .addCase(initalAuthThunk.pending, (state) => {
                state.isLoadingAuth = true
            })
            .addCase(initalAuthThunk.fulfilled, (state) => {
                state.isLoadingAuth = false
            })
            .addCase(initalAuthThunk.rejected, (state) => {
                state.isLoadingAuth = false
            })
})

export const { clearAuth, setAuthenticated } = authSlice.actions
export default authSlice
