import {
    FormHelperText,
    InputAdornment,
    InputBase,
    InputLabel
} from '@mui/material'
import inputClasses from '@styles/components/Input.module.scss'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { forwardRef, useMemo } from 'react'
import { InputProps } from './types'

const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input(props, ref) {
        const {
            label,
            classes,
            className,
            startAdornment,
            endAdornment,
            invalid = false,
            helperText,
            ...rest
        } = props

        const renderStartAdornment = useMemo(() => {
            if (isEmpty(startAdornment)) return null

            return (
                <InputAdornment
                    className={inputClasses.startAdornment}
                    position='start'
                >
                    {startAdornment}
                </InputAdornment>
            )
        }, [startAdornment])

        const renderEndAdornment = useMemo(() => {
            if (isEmpty(endAdornment)) return null

            return (
                <InputAdornment position='end'>{endAdornment}</InputAdornment>
            )
        }, [endAdornment])

        return (
            <div
                className={classNames(inputClasses.input, className)}
                data-start-adornment={!isEmpty(startAdornment)}
                data-end-adornment={!isEmpty(endAdornment)}
                aria-invalid={invalid}
            >
                <InputLabel
                    className={classNames(inputClasses.label, classes?.label)}
                    hidden={!label}
                >
                    {label}
                </InputLabel>
                <InputBase
                    className={inputClasses.inputInner}
                    ref={ref}
                    classes={classes}
                    startAdornment={renderStartAdornment}
                    endAdornment={renderEndAdornment}
                    autoComplete='off'
                    aria-autocomplete='none'
                    {...rest}
                />
                {invalid && (
                    <FormHelperText
                        className={classNames(
                            inputClasses.helperText,
                            classes?.helperText
                        )}
                    >
                        {helperText}
                    </FormHelperText>
                )}
            </div>
        )
    }
)

export default Input
