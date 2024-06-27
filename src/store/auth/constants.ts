import { AuthType } from './types'

export const initialState: AuthType = {
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingAuth: false,
    isLoadingRegister: false,
    userInfo: undefined
}
