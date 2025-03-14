import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";

export default function SOOrderLine({
    className = "",
    line,
    cb,
    destroy,
    deleteDisabled,
    ...props
}) {
    const { product, unitPrice } = line;

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
                className="mr-[5px] w-[792px]"
                value={product}
                onChange={(e) => {
                    cb("product", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={unitPrice}
                type="number"
                step=".0001"
                onChange={(e) => {
                    cb("unitPrice", e.target.value);
                    // cb("totalPrice", (quantity * e.target.value).toFixed(4));
                }}
            />
        </div>
    );
}
