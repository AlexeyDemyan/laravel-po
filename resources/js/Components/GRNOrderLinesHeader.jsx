export default function GRNOrderLinesHeader({
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
            <div className="w-[198px] mr-[5px] text-center">Supplier Ref.</div>
            <div className="w-[198px] mr-[5px] text-center">Product</div>
            <div className="w-[156px] mr-[5px] text-center">Unit of Measure</div>
            <div className="w-[120px] mr-[5px] text-center">Quantity Ordered</div>
            <div className="w-[120px] mr-[5px] text-center">Quantity Received</div>
            <div className="w-[198px] mr-[5px] text-center">Line Value in EUR</div>
        </div>
    );
}
