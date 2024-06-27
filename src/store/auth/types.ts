import { Database } from '@/types/database.types'

export type LoginData = {
    email: string
    password: string
}

export type RegisterData = {
    email: string
    password: string
}

export type AuthType = {
    isAuthenticated: boolean
    isLoadingLogin: boolean
    isLoadingAuth: boolean
    userInfo?: Database['public']['Tables']['users']['Row']

    isLoadingRegister: boolean
}