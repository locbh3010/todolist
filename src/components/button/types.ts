export type ButtonProps = {
    className?: string

    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'danger'
        | 'warning'
        | 'success'
        | 'info'

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
