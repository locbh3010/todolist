import { type AnyType } from '@/types/common.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '@utils/supabase'
import { toast } from 'react-toastify'
import { clearAuth, setAuthenticated } from './slice'
import { LoginData, RegisterData } from './types'

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data: LoginData, { rejectWithValue }) => {
        try {
            const resp = await supabase.auth.signInWithPassword(data)

            if (resp.error) throw resp.error

            return resp?.data
        } catch (error: AnyType) {
            toast.error(error?.message)

            return rejectWithValue(error?.message)
        }
    }
)

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (data: RegisterData, { rejectWithValue }) => {
        try {
            const resp = await supabase.auth.signUp(data)

            if (resp.error) throw resp.error

            toast.success('Account created successfully!')

            return resp?.data
        } catch (error: AnyType) {
            toast.error(error?.message)

            return rejectWithValue(error?.message)
        }
    }
)

export const initalAuthThunk = createAsyncThunk(
    'auth/initializeUser',
    async (_, { dispatch }) => {
        try {
            supabase.auth.onAuthStateChange(async (authState, session) => {
                if (authState === 'SIGNED_IN') {
                    dispatch(setAuthenticated(session))
                    return
                } else if (authState === 'SIGNED_OUT') {
                    dispatch(clearAuth())
                    return
                }

                return
            })

            return
        } catch (error: AnyType) {
            return dispatch(clearAuth())
        }
    }
)

export const logoutThunk = createAsyncThunk('auth/logout', async () => {})
