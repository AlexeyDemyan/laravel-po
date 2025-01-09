import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";

export default function GRNOrderLine({
    className = "",
    line,
    cb,
    destroy,
    deleteDisabled,
    ...props
}) {
    const {
        supplierRef,
        product,
        quantityOrdered,
        quantityReceived,
        lineValue,
        dutyLevy,
    } = line;

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
                value={supplierRef}
                onChange={(e) => {
                    cb("product", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={product}
                onChange={(e) => {
                    cb("product", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={quantityOrdered}
                onChange={(e) => {
                    cb("quantityOrdered", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={quantityReceived}
                onChange={(e) => {
                    cb("quantityReceived", e.target.value);
                }}
            />
            <TextInput
                value={lineValue}
                onChange={(e) => {
                    cb("lineValue", e.target.value);
                }}
            />
            <TextInput
                value={dutyLevy}
                onChange={(e) => {
                    cb("dutyLevy", e.target.value);
                }}
            />
        </div>
    );
}
