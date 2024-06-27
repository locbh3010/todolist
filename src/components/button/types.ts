type ColorType =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'

export type ButtonProps = {
    className?: string

    color?: ColorType
    loaderColor?: ColorType

    size?: 'small' | 'medium' | 'large'

    variant?: 'contained' | 'outlined' | 'ghost' | 'soft'

    loading?: boolean
    loadingPlacement?: 'start' | 'end' | 'replace'

    fullWidth?: boolean

    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    iconOnly?: boolean
    shape?: 'rounded' | 'square' | 'circular'
} & React.ButtonHTMLAttributes<HTMLButtonElement>
