import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormItemContainer from "@/Components/FormItemContainer";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SOOrderLinesHeader from "@/Components/SOOrderLinesHeader";
import SOOrderLine from "@/Components/SOOrderLine";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, useForm, usePage, Link } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getOrderNumberWithYear } from "@/utils";
import { resetEntry } from "@/store/counterSlice";
import { setRecentEntry } from "@/store/recentEntrySlice";
import { dangerButtonClassName } from "@/tailwind-helper";

const maxOrderLinesCount = 10;

const calculateSubTotalAmount = (orderLines) =>
    orderLines
        .reduce((accumulator, line) => accumulator + Number(line.price), 0)
        .toFixed(4);

const calculateTotalAmount = (orderLines, vatAmount) => {
    let totalOrderLinesAmount = orderLines.reduce(
        (accumulator, line) => accumulator + Number(line.price),
        0
    );

    return Number(totalOrderLinesAmount) + Number(vatAmount);
};

const notify = () => toast.success("SO Submitted Successfully!");

export default function Index() {
    // const dispatch = useDispatch();
    // const entryFromState = useSelector((state) => state.entry);

    const currentUser = usePage().props.auth.user;

    // const orderLinesFromState = entryFromState.editing
    //     ? JSON.parse(entryFromState.orderLines)
    //     : [
    //           {
    //               details: "",
    //               price: "",
    //           },
    //       ];

    // const [orderLines, setOrderLines] = useState(orderLinesFromState);
    const [orderLines, setOrderLines] = useState([
        {
            details: "",
            price: "",
        },
    ]);

    const formItemSanitizer = (formItem, defaultValue) =>
        // entryFromState[formItem] || defaultValue;
        defaultValue;

    const { data, setData, post, reset, put } = useForm({
        company: formItemSanitizer(
            "company",
            "CassarCamilleri Marketing, Sales & Distribution Ltd"
        ),
        supplier: formItemSanitizer("supplier", ""),
        supplierAddress: formItemSanitizer("supplierAddress", ""),
        telephone: formItemSanitizer("telephone", ""),
        supplierCode: formItemSanitizer("supplierCode", ""),
        supplierVATNumber: formItemSanitizer("supplierVATNumber", ""),
        date: formItemSanitizer("date", ""),
        referenceNumber: formItemSanitizer("referenceNumber", ""),
        orderLines: orderLines,
        subTotalAmount: formItemSanitizer("subTotalAmount", ""),
        vatAmount: formItemSanitizer("vatAmount", ""),
        totalAmount: formItemSanitizer("totalAmount", ""),
        dueDate: formItemSanitizer("dueDate", ""),
        paymentTerms: formItemSanitizer("paymentTerms", ""),
        budgetHeadRef: formItemSanitizer("budgetHeadRef", ""),
        orderFormRaisedBy: formItemSanitizer("orderFormRaisedBy", ""),
        authorisedBy: formItemSanitizer("authorisedByorderFormRaisedBy", ""),
        userId: currentUser.id,
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);

        // if (entryFromState.editing) {
        //     // put(route("SOEntry.update", entryFromState.orderNumber), {
        //     //     onSuccess: () => {
        //     //         setOrderLines([
        //     //             // {
        //     //             //     product: "",
        //     //             //     supplierRef: "",
        //     //             //     quantity: "",
        //     //             //     unitPrice: "",
        //     //             //     totalPrice: "",
        //     //             // },
        //     //             {
        //     //                 details: "",
        //     //                 price: "",
        //     //             },
        //     //         ]);
        //     //         // dispatch(resetEntry());
        //     //         // dispatch(setRecentEntry(entryFromState.orderNumber));
        //     //     },
        //     // });
        // } else
        {
            post(route("SOEntry.store"), {
                onSuccess: () => {
                    setOrderLines([
                        // {
                        //     product: "",
                        //     supplierRef: "",
                        //     quantity: "",
                        //     unitPrice: "",
                        //     totalPrice: "",
                        // },
                        {
                            details: "",
                            price: "",
                        },
                    ]);
                    notify();
                    // dispatch(resetEntry());
                    reset();
                },
            });
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="SOForm" />
            <form
                onSubmit={submit}
                className={
                    "max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
                    // + (entryFromState.editing && " bg-red-300")
                }
            >
                {/* {entryFromState.editing && (
                    <FormItemContainer>
                        <h1 className="text-3xl">
                            EDITING Order Number:{" "}
                            {getOrderNumberWithYear(entryFromState)}
                        </h1>
                        <Link
                            as="button"
                            href={route("POForm.index")}
                            className={dangerButtonClassName + " ml-[10px]"}
                            onClick={() => {
                                dispatch(resetEntry());
                            }}
                        >
                            Cancel Edit
                        </Link>
                    </FormItemContainer>
                )} */}
                <FormItemContainer>
                    <InputLabel htmlFor="company" value="Company" />
                    <select
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.company}
                        onChange={(e) => setData("company", e.target.value)}
                    >
                        <option value="CassarCamilleri Bottlers & Vintners Ltd">
                            CassarCamilleri Bottlers & Vintners Ltd
                        </option>
                        <option value="CassarCamilleri Marketing, Sales & Distribution Ltd">
                            CassarCamilleri Marketing, Sales & Distribution Ltd
                        </option>
                        <option value="CassarCamilleri Viticulture Ltd">
                            CassarCamilleri Viticulture Ltd
                        </option>
                    </select>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="supplier" value="Supplier" />
                    <TextInput
                        value={data.supplier}
                        onChange={(e) => setData("supplier", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="supplierAddress"
                        value="Supplier Address"
                    />
                    <TextInput
                        value={data.supplierAddress}
                        onChange={(e) =>
                            setData("supplierAddress", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="telephone" value="Tel" />
                    <TextInput
                        value={data.telephone}
                        onChange={(e) => setData("telephone", e.target.value)}
                    ></TextInput>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="supplierCode" value="Supplier Code" />
                    <TextInput
                        value={data.supplierCode}
                        onChange={(e) =>
                            setData("supplierCode", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="supplierVATNumber"
                        value="Supplier VAT No"
                    />
                    <TextInput
                        value={data.supplierVATNumber}
                        onChange={(e) =>
                            setData("supplierVATNumber", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="date" value="Date" />
                    <input
                        type="date"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                    ></input>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="referenceNumber"
                        value="Reference No"
                    />
                    <TextInput
                        value={data.referenceNumber}
                        onChange={(e) => {
                            setData("referenceNumber", e.target.value);
                        }}
                    />
                </FormItemContainer>

                <FormItemContainer className="!items-start pt-[40px]">
                    <InputLabel htmlFor="orderLines" value="Order Lines" />
                    <div>
                        <SOOrderLinesHeader />
                        {orderLines.map((line, index) => (
                            <SOOrderLine
                                key={index}
                                line={line}
                                deleteDisabled={index}
                                cb={(prop, value) => {
                                    const stateCopy = [...orderLines];
                                    stateCopy[index][prop] = value;
                                    setOrderLines(stateCopy);
                                    setData("orderLines", stateCopy);
                                }}
                                destroy={() => {
                                    const stateCopy = [...orderLines];
                                    stateCopy.splice(index, 1);
                                    setOrderLines(stateCopy);
                                    setData("orderLines", stateCopy);
                                }}
                            />
                        ))}
                        <SecondaryButton
                            disabled={orderLines.length >= maxOrderLinesCount}
                            onClick={() => {
                                setOrderLines([
                                    ...orderLines,
                                    {
                                        details: "",
                                        price: "",
                                    },
                                ]);
                                setData("orderLines", orderLines);
                            }}
                        >
                            Add Line
                        </SecondaryButton>
                    </div>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="subTotalAmount"
                        value="Sub Total Amount"
                    />
                    <TextInput
                        value={calculateSubTotalAmount(orderLines)}
                        type="number"
                        step="0.0001"
                        readOnly
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="vatAmount" value="VAT Amount" />
                    <TextInput
                        type="number"
                        step="0.0001"
                        value={data.vatAmount}
                        onChange={(e) => {
                            setData("vatAmount", e.target.value);
                        }}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="totalAmount" value="Total Amount" />
                    <TextInput
                        value={calculateTotalAmount(orderLines, data.vatAmount)}
                        type="number"
                        step="0.0001"
                        readOnly
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="dueDate" value="Due Date" />
                    <input
                        type="date"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.dueDate}
                        onChange={(e) => setData("dueDate", e.target.value)}
                    ></input>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="paymentTerms" value="Payment Terms" />
                    <TextInput
                        value={data.paymentTerms}
                        onChange={(e) =>
                            setData("paymentTerms", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="budgetHeadRef"
                        value="Budget Head Ref"
                    />
                    <TextInput
                        value={data.budgetHeadRef}
                        onChange={(e) =>
                            setData("budgetHeadRef", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="orderFormRaisedBy"
                        value="Order Form Raised by"
                    />
                    <TextInput
                        value={data.orderFormRaisedBy}
                        onChange={(e) =>
                            setData("orderFormRaisedBy", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="authorisedBy" value="Authorised by" />
                    <TextInput
                        value={data.authorisedBy}
                        onChange={(e) =>
                            setData("authorisedBy", e.target.value)
                        }
                    />
                </FormItemContainer>

                <PrimaryButton
                    className="ms-4"
                    disabled={false}
                    onClick={() => {
                        setData((prev) => ({
                            ...prev,
                            orderLines: JSON.stringify(data.orderLines),
                            subTotalAmount: calculateSubTotalAmount(orderLines),
                            totalAmount: calculateTotalAmount(orderLines, data.vatAmount)
                        }));
                    }}
                >
                    Submit Service Order
                </PrimaryButton>
                <ToastContainer position="bottom-left" />
            </form>
        </AuthenticatedLayout>
    );
}
