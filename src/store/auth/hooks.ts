import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { loginThunk, registerThunk } from './thunks'
import { LoginData, RegisterData } from './types'

export function useAuth() {
    const dispatch = useAppDispatch()

    const { isAuthenticated, isLoadingLogin, isLoadingRegister } =
        useAppSelector((state) => state.auth)

    const login = useCallback(
        (data: LoginData) => dispatch(loginThunk(data)),
        [dispatch]
    )

    const register = useCallback(
        (data: RegisterData) => dispatch(registerThunk(data)),
        [dispatch]
    )

    return {
        isAuthenticated,
        isLoadingLogin,
        login,
        isLoadingRegister,
        register
    }
}
