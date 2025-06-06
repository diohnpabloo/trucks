type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({ isLoading, type = "button", children, ...rest }: Props) {
    return (
        <button {...rest}
            className="bg-green-100 rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
        >
            {children}
        </button>
    )
}