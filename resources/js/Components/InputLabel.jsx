export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-gray-700 min-w-[100px] ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
