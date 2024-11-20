export default function OrderLinesHeader({
    className = '',
    ...props
}) {
    return (
        <div
            {...props}
            className={
                `flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]` +
                className
            }
        >
            <div>Product</div>
            <div>Supplier Ref.</div>
            <div>Quantity</div>
            <div>Unit Price</div>
            <div>Total Price</div>
        </div>
    );
}
