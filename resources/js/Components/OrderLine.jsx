import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";

export default function OrderLine({
    className = "",
    line,
    cb,
    destroy,
    deleteDisabled,
    ...props
}) {
    const { product, quantity, supplierRef, unitPrice } = line;

    return (
        <div
            {...props}
            className={
                `flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]` +
                className
            }
        >
            <SecondaryButton
                className="mr-[10px]"
                disabled={!deleteDisabled}
                onClick={destroy}
            >
                X
            </SecondaryButton>
            <TextInput
                className="mr-[5px]"
                value={product}
                onChange={(e) => {
                    cb("product", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={supplierRef}
                onChange={(e) => {
                    cb("supplierRef", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={quantity}
                type="number"
                step=".01"
                onChange={(e) => {
                    cb("quantity", e.target.value);
                    cb("totalPrice", (e.target.value * unitPrice).toFixed(4));
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={unitPrice}
                type="number"
                step=".0001"
                onChange={(e) => {
                    cb("unitPrice", e.target.value);
                    cb("totalPrice", (quantity * e.target.value).toFixed(4));
                }}
            />
            <TextInput
                value={(quantity * unitPrice).toFixed(4)}
                type="number"
                step=".0001"
                readOnly
            />
        </div>
    );
}
