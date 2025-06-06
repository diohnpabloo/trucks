type Props = React.ComponentProps<"input"> & {
    legend?: string
}


export function Input({ legend, ...rest }: Props) {
    return (
        <fieldset className="flex flex-1 max-h-20 focus-within:text-green-100">
            <legend className="uppercase text-xs mb-2">{legend}</legend>
            <input
                className="w-full border border-gray-300 rounded-lg text-gray-100 px-4 outline-none focus:border-2 focus:border-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
                {...rest}
            />
        </fieldset>
    )
}