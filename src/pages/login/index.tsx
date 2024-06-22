import { useAuth } from '@/store/auth/hooks'
import wave from '@/svg/wave.svg'
import { Button } from '@components/button'
import { Iconify } from '@components/icon/Iconify'
import TextField from '@components/rhf/TextField'
import { Link, Stack } from '@mui/material'
import loginStyles from '@styles/pages/Login.module.scss'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { defaultValues, loginSchema } from './constants'
import { LoginData } from './types'

const Login = () => {
    const { login } = useAuth()

    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: loginSchema
    })

    const handleLogin = useCallback((data: LoginData) => login(data), [login])

    return (
        <div className={loginStyles.auth}>
            <div className={loginStyles.wave}>
                <img
                    className={loginStyles.waveImage}
                    src={wave}
                    alt=''
                />
            </div>

            <form
                className={loginStyles.form}
                onSubmit={handleSubmit(handleLogin)}
                autoComplete='off'
                aria-autocomplete='none'
            >
                <h1 className={loginStyles.formTitle}>Welcome back!</h1>

                <Stack spacing={2.5}>
                    <TextField
                        name='email'
                        control={control}
                        label='Email'
                        placeholder='example@mail.com'
                        startAdornment={
                            <Iconify
                                icon='material-symbols:alternate-email-rounded'
                                className='icon'
                            />
                        }
                    />

                    <TextField
                        name='password'
                        control={control}
                        type='password'
                        label='Password'
                        placeholder='******'
                        startAdornment={
                            <Iconify icon='solar:lock-keyhole-outline' />
                        }
                    />
                </Stack>

                <Button
                    type='submit'
                    size='large'
                    className={loginStyles.submit}
                    fullWidth
                >
                    Log In
                </Button>

                <Link className={loginStyles.register}>Or Register</Link>
            </form>
        </div>
    )
}

export default Login
