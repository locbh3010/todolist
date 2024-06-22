/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputProps } from '@components/form/types'
import { Control } from 'react-hook-form'

export type TextFieldProps = {
    control: Control<any>
    name: string
} & InputProps
