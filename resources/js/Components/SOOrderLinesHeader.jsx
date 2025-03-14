export default function SOOrderLinesHeader({
    className = '',
    ...props
}) {
    return (
        <div
            {...props}
            className={
                `flex flex-row items-center mb-[10px] min-w-[700px]` +
                className
            }
        >
            <div className="w-[53px] "></div>
            <div className="w-[792px] mr-[5px] text-center">Details of Service Requested</div>
            <div className="w-[198px] mr-[5px] text-center">Price</div>
        </div>
    );
}
