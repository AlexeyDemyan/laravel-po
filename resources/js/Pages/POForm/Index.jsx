import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormItemContainer from "@/Components/FormItemContainer";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import OrderLinesHeader from "@/Components/OrderLinesHeader";
import OrderLine from "@/Components/OrderLine";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, useForm } from "@inertiajs/react";

const maxOrderLinesCount = 10;

const calculateNetTotalValue = (orderLines, discount) => {
    const sumOfTotalPrices = orderLines.reduce(
        (accumulator, line) => accumulator + Number(line.totalPrice),
        0
    );

    return ((sumOfTotalPrices * (100 - discount)) / 100).toFixed(4);
};

export default function Index() {
    const [orderLines, setOrderLines] = useState([
        {
            product: "",
            supplierRef: "",
            quantity: "",
            unitPrice: "",
            totalPrice: "",
        },
    ]);

    const { data, setData, post, reset } = useForm({
        company: "Marsovin Winery Ltd",
        date: "",
        supplier: "",
        supplierAddress: "",
        supplierCode: "",
        deliveryDate: "",
        orderLines: orderLines,
        paymentTerms: "",
        otherRemarks: "",
        discount: "",
        netTotalValue: "",
        priceIncludesVat: "Yes",
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route("POEntry.store"), {
            onSuccess: () => {
                setOrderLines([
                    {
                        product: "",
                        supplierRef: "",
                        quantity: "",
                        unitPrice: "",
                        totalPrice: "",
                    },
                ]);
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="POForm" />
            <form
                onSubmit={submit}
                className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"
            >
                <FormItemContainer>
                    <InputLabel htmlFor="company" value="Company" />
                    <select
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.company}
                        onChange={(e) => setData("company", e.target.value)}
                    >
                        <option value="Marsovin Winery Ltd">
                            Marsovin Winery Ltd
                        </option>
                        <option value="CassarCamilleri Marketing, Sales & Distribution Ltd">
                            CassarCamilleri Marketing, Sales & Distribution Ltd
                        </option>
                        <option value="Marsovin Viticulture Ltd">
                            Marsovin Viticulture Ltd
                        </option>
                    </select>
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
                    <InputLabel htmlFor="supplierCode" value="Supplier Code" />
                    <TextInput
                        value={data.supplierCode}
                        onChange={(e) =>
                            setData("supplierCode", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="deliveryDate" value="Delivery Date" />
                    <input
                        type="date"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.deliveryDate}
                        onChange={(e) =>
                            setData("deliveryDate", e.target.value)
                        }
                    ></input>
                </FormItemContainer>

                <FormItemContainer className="!items-start pt-[40px]">
                    <InputLabel htmlFor="orderLines" value="Order Lines" />
                    <div>
                        <OrderLinesHeader />
                        {orderLines.map((line, index) => (
                            <OrderLine
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
                                        product: "",
                                        supplierRef: "",
                                        quantity: "",
                                        unitPrice: "",
                                        totalPrice: "",
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
                    <InputLabel htmlFor="paymentTerms" value="Payment Terms" />
                    <TextInput
                        value={data.paymentTerms}
                        onChange={(e) =>
                            setData("paymentTerms", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="otherRemarks" value="Other Remarks" />
                    <TextInput
                        value={data.otherRemarks}
                        onChange={(e) =>
                            setData("otherRemarks", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="discount" value="Discount %" />
                    <TextInput
                        value={data.discount}
                        type="number"
                        step="0.01"
                        onChange={(e) => {
                            setData("discount", e.target.value);
                        }}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="netTotalValue"
                        value="Net Total Value"
                    />
                    <TextInput
                        value={calculateNetTotalValue(
                            orderLines,
                            data.discount
                        )}
                        type="number"
                        step="0.0001"
                        readOnly
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="priceIncludesVat"
                        value="Price Includes VAT"
                    />
                    <select
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.priceIncludesVat}
                        onChange={(e) =>
                            setData("priceIncludesVat", e.target.value)
                        }
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </FormItemContainer>

                <PrimaryButton
                    className="ms-4"
                    disabled={false}
                    onClick={() => {
                        setData((prev) => ({
                            ...prev,
                            orderLines: JSON.stringify(data.orderLines),
                            netTotalValue: calculateNetTotalValue(
                                orderLines,
                                data.discount
                            ),
                        }));
                    }}
                >
                    Submit PO
                </PrimaryButton>
            </form>
        </AuthenticatedLayout>
    );
}
