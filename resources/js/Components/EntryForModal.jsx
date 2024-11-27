import React from "react";
import FormItemContainer from "./FormItemContainer";
import SecondaryButton from "./SecondaryButton";

export default function EntryForModal({ entry }) {
    console.log(entry);

    const {
        id,
        company,
        date,
        supplier,
        supplierAddress,
        supplierCode,
        deliveryDate,
        orderLines,
        paymentTerms,
        otherRemarks,
        discount,
        netTotalValue,
        priceIncludesVat,
    } = entry;

    const entryToObject = {
        "Order Number": id,
        Company: company,
        Date: date,
        Supplier: supplier,
        "Supplier Address": supplierAddress,
        "Supplier Code": supplierCode,
        "Delivery Date": deliveryDate,
        "Order Lines": orderLines,
        "Payment Terms": paymentTerms,
        "Other Remarks": otherRemarks,
        Discount: discount,
        "Net Total Value": netTotalValue,
        "Price Includes VAT": priceIncludesVat,
    };

    return (
        <div>
            <div className="flex justify-end">
                <span
                    className="text-4xl text-right pr-3 hover:cursor-pointer"
                    onClick={() => {
                        console.log("close button click");
                    }}
                >
                    &times;
                </span>
            </div>
            {Object.entries(entryToObject).map((item) => (
                <FormItemContainer key={item.id} className="p-2">
                    <div className="block text-sm font-medium text-gray-700 min-w-[170px] ml-6 mr-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            {item[0]}
                        </h2>
                    </div>
                    <div>
                        <p className="mt-1 text-sm text-gray-600 mr-6">
                            {item[1]}
                        </p>
                    </div>
                </FormItemContainer>
            ))}
            <FormItemContainer>
                <SecondaryButton>Edit</SecondaryButton>
            </FormItemContainer>
            <FormItemContainer>
                <SecondaryButton>Print</SecondaryButton>
            </FormItemContainer>
        </div>
    );
}
