import { useAuth } from '@/store/auth/hooks'
import { RegisterData } from '@/store/auth/types'
import wave from '@/svg/wave.svg'
import { Button } from '@components/button'
import { Iconify } from '@components/icon/Iconify'
import TextField from '@components/rhf/TextField'
import { Link, Stack } from '@mui/material'
import loginStyles from '@styles/pages/Login.module.scss'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { defaultValues, registerSchema } from './constants'
import { Link as RouterLink } from 'react-router-dom'
import { routes } from '@utils/routes'

const Register = () => {
    const { register, isLoadingRegister } = useAuth()

    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: registerSchema
    })

    const handleLogin = useCallback(
        (data: RegisterData) => register(data),
        [register]
    )

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
                <h1 className={loginStyles.formTitle}>Created new account!</h1>

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
                    loading={isLoadingRegister}
                    type='submit'
                    size='large'
                    className={loginStyles.submit}
                    fullWidth
                >
                    Register
                </Button>

                <Link
                    className={loginStyles.register}
                    component={RouterLink}
                    to={routes.login}
                >
                    Or Login
                </Link>
            </form>
        </div>
    )
}

export default Register
