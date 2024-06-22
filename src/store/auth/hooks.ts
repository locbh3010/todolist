import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { loginThunk } from './thunks'
import { LoginData } from './types'

export function useAuth() {
    const dispatch = useAppDispatch()

    const { isAuthenticated, isLoadingLogin } = useAppSelector(
        (state) => state.auth
    )

    const login = useCallback(
        (data: LoginData) => dispatch(loginThunk(data)),
        [dispatch]
    )

    return {
        isAuthenticated,
        isLoadingLogin,
        login
    }
}
