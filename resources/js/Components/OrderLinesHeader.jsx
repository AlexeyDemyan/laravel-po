export default function OrderLinesHeader({
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
            <div className="w-[198px] mr-[5px] text-center">Product</div>
            <div className="w-[198px] mr-[5px] text-center">Supplier Ref.</div>
            <div className="w-[198px] mr-[5px] text-center">Quantity</div>
            <div className="w-[198px] mr-[5px] text-center">Unit Price</div>
            <div className="w-[198px] mr-[5px] text-center">Total Price</div>
        </div>
    );
}
