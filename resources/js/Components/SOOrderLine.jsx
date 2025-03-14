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
    const { details, price } = line;

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
                value={details}
                onChange={(e) => {
                    cb("details", e.target.value);
                }}
            />
            <TextInput
                className="mr-[5px]"
                value={price}
                type="number"
                step=".0001"
                onChange={(e) => {
                    cb("price", e.target.value);
                }}
            />
        </div>
    );
}
