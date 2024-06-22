/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@components/form'
import { forwardRef } from 'react'
import { useController } from 'react-hook-form'
import { TextFieldProps } from './types'

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { control, name, ...rest } = props

    const { field, fieldState } = useController({
        control,
        name
    })

    return (
        <Input
            {...rest}
            invalid={fieldState.invalid}
            helperText={fieldState.error?.message}
            {...field}
            ref={ref}
        />
    )
})

export default TextField
