import React from "react";
import FormItemContainer from "./FormItemContainer";
import SecondaryButton from "./SecondaryButton";
import { previewPrint } from "@/preview-print.js";

const convertOrderLineToText = (line) => {
    return `${line.product}(${line.supplierRef}) by ${line.quantity} at ${line.unitPrice} EUR = ${line.totalPrice} EUR \n `;
};

export default function EntryForModal({ entry, onClick }) {
    console.log(entry);

    const {
        orderNumber,
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
        "Order Number": orderNumber,
        Company: company,
        Date: date,
        Supplier: supplier,
        "Supplier Address": supplierAddress,
        "Supplier Code": supplierCode,
        "Delivery Date": deliveryDate,
        "Order Lines": JSON.parse(orderLines),
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
                    onClick={onClick}
                >
                    &times;
                </span>
            </div>
            {Object.entries(entryToObject).map((item) => (
                <FormItemContainer key={item[0]} className="p-2">
                    <div className="block text-sm font-medium text-gray-700 min-w-[170px] ml-6 mr-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            {item[0]}
                        </h2>
                    </div>
                    <div>
                        {Array.isArray(item[1]) ? (
                            item[1].map((line) => (
                                <p
                                    className="mt-1 text-sm text-gray-600 mr-6"
                                    key={item[1].indexOf(line)}
                                >
                                    {convertOrderLineToText(line)}
                                </p>
                            ))
                        ) : (
                            <p className="mt-1 text-sm text-gray-600 mr-6">
                                {item[1]}
                            </p>
                        )}
                    </div>
                </FormItemContainer>
            ))}
            <FormItemContainer className="justify-around mb-[30px] mt-[30px]">
                <SecondaryButton>Edit</SecondaryButton>
                <SecondaryButton
                    onClick={() => {previewPrint(entry)}}
                >
                    Print
                </SecondaryButton>
            </FormItemContainer>
        </div>
    );
}
