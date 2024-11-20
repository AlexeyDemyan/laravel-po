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
                `block text-sm font-medium text-gray-700 min-w-[140px] ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
