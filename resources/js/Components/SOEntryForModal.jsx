import React from "react";
import FormItemContainer from "./FormItemContainer";
import SecondaryButton from "./SecondaryButton";
import { formatDate, getOrderNumberWithYear } from "@/utils.js";
import { usePage, Link } from "@inertiajs/react";
import {
    dangerButtonClassName,
    secondaryButtonClassName,
} from "@/tailwind-helper";
import { useDispatch } from "react-redux";
import { updateServiceOrderEntry } from "@/store/serviceEntrySlice";

const convertOrderLineToText = (line) => {
    return `${line.details} at ${line.price} EUR \n `;
};

export default function SOEntryForModal({ entry, onClose, onPrint }) {
    const dispatch = useDispatch();

    const currentUser = usePage().props.auth.user;

    const {
        company,
        supplier,
        date,
        referenceNumber,
        orderLines,
        subTotalAmount,
        vatAmount,
        totalAmount,
        dueDate,
        paymentTerms,
    } = entry;

    const entryToObject = {
        "Order Number": getOrderNumberWithYear(entry),
        Company: company,
        Supplier: supplier,
        Date: formatDate(date),
        "Reference No:": referenceNumber,
        "Order Lines": JSON.parse(orderLines),
        "Sub Total Amount": subTotalAmount,
        "VAT Amount": vatAmount,
        "Total Amount": totalAmount,
        "Due Date": dueDate,
        "Payment Terms": paymentTerms,
    };

    return (
        <div>
            <div className="flex justify-end">
                <span
                    className="text-4xl text-right pr-3 hover:cursor-pointer"
                    onClick={onClose}
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
                <Link
                    as="button"
                    href={route("SOForm.index")}
                    className={secondaryButtonClassName}
                    onClick={() => {
                        dispatch(updateServiceOrderEntry(entry));
                    }}
                >
                    Edit
                </Link>
                {currentUser.name === "Admin" && (
                    <Link
                        as="button"
                        href={route("SOEntry.destroy", entry.orderNumber)}
                        method="delete"
                        className={dangerButtonClassName}
                        onClick={onClose}
                    >
                        DELETE ENTRY
                    </Link>
                )}
                <SecondaryButton
                    onClick={() => {
                        onPrint();
                    }}
                >
                    Print
                </SecondaryButton>
            </FormItemContainer>
        </div>
    );
}
