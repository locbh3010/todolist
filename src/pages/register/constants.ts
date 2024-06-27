import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const defaultValues = {
    email: '',
    password: ''
}

export const registerSchema = zodResolver(
    z.object({
        email: z
            .string()
            .email({ message: 'Invalid email address' })
            .min(1, { message: 'Email is required' }),
        password: z.string().min(1, { message: 'Password is required' })
    })
)
