import { ButtonBase } from '@mui/material'
import buttonClasses from '@styles/components/Button.module.scss'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { ButtonProps } from './types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        children,
        className,
        variant = 'contained',
        color = 'default',
        loading = false,
        size = 'medium',
        fullWidth = false,
        ...rest
    } = props

    return (
        <ButtonBase
            className={classNames(
                buttonClasses.button,
                {
                    [buttonClasses.loading]: loading,
                    [buttonClasses.fullWidth]: fullWidth,
                    [buttonClasses[size]]: size
                },
                buttonClasses[color],
                buttonClasses[variant],
                className
            )}
            TouchRippleProps={{
                classes: {
                    rippleVisible: buttonClasses.rippleVisible
                }
            }}
            ref={ref}
            {...rest}
        >
            {children}
        </ButtonBase>
    )
})

export default Button
