import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormItemContainer from "@/Components/FormItemContainer";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import GRNOrderLinesHeader from "@/Components/GRNOrderLinesHeader";
import GRNOrderLine from "@/Components/GRNOrderLine";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, useForm } from "@inertiajs/react";

const maxOrderLinesCount = 6;

export default function Index() {
    const [orderLines, setOrderLines] = useState([
        {
            supplierRef: "",
            product: "",
            quantityOrdered: "",
            quantityReceived: "",
            lineValue: "",
            dutyLevy: "",
        },
    ]);

    const { data, setData, post } = useForm({
        company: "Marsovin Winery Ltd",
        supplier: "",
        country: "",
        currency: "",
        exchangeRate: "",
        poreference: "",
        receivedDate: "",
        originCountry: "",
        supplierCode: "",
        supplierInvoice: "",
        packingDetails: "",
        orderLines: orderLines,
    });

    const submit = (e) => {
        e.preventDefault();

        // post(route("POEntry.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title="GRNForm" />
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
                        <option value="CassarCamilleri Viticulture Ltd">
                            CassarCamilleri Viticulture Ltd
                        </option>
                        <option value="CassarCamilleri MSD Ltd">
                            CassarCamilleri MSD Ltd
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
                    <InputLabel htmlFor="country" value="Country" />
                    <TextInput
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="currency" value="Currency" />
                    <TextInput
                        value={data.currency}
                        onChange={(e) => setData("currency", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="exchangeRate"
                        value="Exchange Rate EUR 1"
                    />
                    <TextInput
                        value={data.exchangeRate}
                        onChange={(e) =>
                            setData("exchangeRate", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="poreference" value="P/Order Ref" />
                    <TextInput
                        value={data.poreference}
                        onChange={(e) => setData("poreference", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="receivedDate" value="Date Received" />
                    <input
                        type="date"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.receivedDate}
                        onChange={(e) =>
                            setData("receivedDate", e.target.value)
                        }
                    ></input>
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="originCountry"
                        value="Country of Origin"
                    />
                    <TextInput
                        value={data.originCountry}
                        onChange={(e) =>
                            setData("originCountry", e.target.value)
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
                    <InputLabel
                        htmlFor="supplierInvoice"
                        value="Supplier Invoice"
                    />
                    <TextInput
                        value={data.supplierInvoice}
                        onChange={(e) =>
                            setData("supplierInvoice", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="packingDetails"
                        value="Packing Details"
                    />
                    <TextInput
                        value={data.packingDetails}
                        onChange={(e) =>
                            setData("packingDetails", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer className="!items-start pt-[40px]">
                    <InputLabel htmlFor="orderLines" value="Order Lines" />
                    <div>
                        <GRNOrderLinesHeader />
                        {orderLines.map((line, index) => (
                            <GRNOrderLine
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
                                        supplierRef: "",
                                        product: "",
                                        quantityOrdered: "",
                                        quantityReceived: "",
                                        lineValue: "",
                                        dutyLevy: "",
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
                    <InputLabel htmlFor="totalItems" value="Total Items" />
                    <TextInput
                        value={data.totalItems}
                        onChange={(e) => setData("totalItems", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="hashTotalQuantity"
                        value="Hash Total Quantity"
                    />
                    <TextInput
                        value={data.hashTotalQuantity}
                        onChange={(e) =>
                            setData("hashTotalQuantity", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="hashLineValue"
                        value="Hash Line Value"
                    />
                    <TextInput
                        value={data.hashLineValue}
                        onChange={(e) =>
                            setData("hashLineValue", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="receivingStoreCostCenter"
                        value="Receiving Store"
                    />
                    <TextInput
                        value={data.receivingStoreCostCenter}
                        onChange={(e) =>
                            setData("receivingStoreCostCenter", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel htmlFor="remarks" value="Remarks" />
                    <TextInput
                        value={data.remarks}
                        onChange={(e) => setData("remarks", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="goodsReceivedBy"
                        value="Goods received by"
                    />
                    <TextInput
                        value={data.goodsReceivedBy}
                        onChange={(e) =>
                            setData("goodsReceivedBy", e.target.value)
                        }
                    />
                </FormItemContainer>

                <FormItemContainer className="!items-start pt-[40px]">
                    Charges
                    <div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="freight" value="Freight" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightCharges}
                                onChange={(e) => {
                                    setData("freightCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightSupplierCode}
                                onChange={(e) => {
                                    setData("freightSupplierCode", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightSupplierName}
                                onChange={(e) => {
                                    setData("freightSupplierName", e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </FormItemContainer>

                <PrimaryButton
                    className="ms-4"
                    disabled={false}
                    onClick={() => {
                        setData("orderLines", JSON.stringify(data.orderLines));
                    }}
                >
                    Submit PO
                </PrimaryButton>
            </form>
        </AuthenticatedLayout>
    );
}
