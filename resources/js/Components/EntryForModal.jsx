import React from "react";
import FormItemContainer from "./FormItemContainer";

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

    return Object.entries(entryToObject).map((item) => (
        <FormItemContainer key={item.id} className="p-6">
            <div className="block text-sm font-medium text-gray-700 min-w-[140px]">
                <h2 className="text-lg font-medium text-gray-900">{item[0]}</h2>
            </div>
            <div>
                <p className="mt-1 text-sm text-gray-600">{item[1]}</p>
            </div>
        </FormItemContainer>
    ));
}
