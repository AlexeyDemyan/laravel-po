import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";

export default function OrderLine({ className = "", line, cb, ...props }) {
    const { product, quantity, supplierRef, totalPrice, unitPrice } = line;

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
                disabled={false}
                onClick={() => {
                    console.log("click!!");
                }}
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
                onChange={(e) => {
                    cb("quantity", e.target.value);
                }}
            />
            <TextInput
                value={unitPrice}
                onChange={(e) => {
                    cb("unitPrice", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={totalPrice}
                onChange={(e) => {
                    cb("totalPrice", e.target.value);
                }}
            />
        </div>
    );
}
