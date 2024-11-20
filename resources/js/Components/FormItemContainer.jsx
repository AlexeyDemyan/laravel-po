export default function FormItemContainer({
    className = '',
    children,
    ...props
}) {
    return (
        <div
            {...props}
            className={
                `flex flex-row items-center mb-[10px] ` +
                className
            }
        >
            {children}
        </div>
    );
}
