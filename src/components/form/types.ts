import { InputBaseProps } from '@mui/material'

export type InputProps = {
    label?: string
    className?: string

    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode

    classes?: {
        label?: string
        wrapper?: string
        helperText?: string
    } & InputBaseProps['classes']

    invalid?: boolean
    helperText?: string
} & Omit<
    InputBaseProps,
    'className' | 'classes' | 'startAdornment' | 'endAdornment'
>
