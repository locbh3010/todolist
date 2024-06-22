import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginData } from './types'

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data: LoginData, { rejectWithValue, fulfillWithValue }) => {
        try {
            fulfillWithValue(data)
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const registerThunk = createAsyncThunk('auth/register', async () => {})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {})
