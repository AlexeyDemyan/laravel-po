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
import { ToastContainer, toast } from "react-toastify";

const maxOrderLinesCount = 6;

const calculateTotalItems = (orderLines) => {
    let count = 0;

    orderLines.forEach((line) => {
        if (line.product) {
            count++;
        }
    });

    return count;
};

const calculateHashTotalQty = (orderLines) => {
    let hashTotalQty = orderLines.reduce(
        (accumulator, line) => accumulator + Number(line.quantityOrdered),
        0
    );

    return hashTotalQty.toFixed(2);
};

const calculateHashLineValue = (orderLines) => {
    let hashLineValue = orderLines.reduce(
        (accumulator, line) => accumulator + Number(line.lineValue),
        0
    );

    return hashLineValue.toFixed(4);
};

const notify = () => toast.success("GRN Submitted Successfully!");

export default function Index() {
    const [orderLines, setOrderLines] = useState([
        {
            supplierRef: "",
            product: "",
            unitOfMeasure: "",
            quantityOrdered: "",
            quantityReceived: "",
            lineValue: "",
        },
    ]);

    const { data, setData, post, reset } = useForm({
        company: "Marsovin Winery Ltd",
        supplier: "",
        country: "",
        currency: "",
        exchangeRate: "",
        receivedDate: "",
        originCountry: "",
        supplierCode: "",
        supplierInvoice: "",
        packingDetails: "",
        orderLines: orderLines,
        totalItems: "",
        hashTotalQuantity: "",
        hashLineValue: "",
        receivingStoreCostCenter: "",
        remarks: "",
        goodsReceivedBy: "",
        freightCharges: "",
        freightSupplierCode: "",
        freightSupplierName: "",
        insuranceCharges: "",
        insuranceSupplierCode: "",
        insuranceSupplierName: "",
        handlingCharges: "",
        handlingSupplierCode: "",
        handlingSupplierName: "",
        cartageCharges: "",
        cartageSupplierCode: "",
        cartageSupplierName: "",
        otherCharges: "",
        otherSupplierCode: "",
        otherSupplierName: "",
        vatCharges: "",
        vatSupplierCode: "",
        vatSupplierName: "",
        depositCharges: "",
        depositSupplierCode: "",
        depositSupplierName: "",
    });

    const submit = (e) => {
        e.preventDefault();

        console.log(data);
        post(route("GRNEntry.store"), {
            onSuccess: () => {
                setOrderLines([
                    {
                        supplierRef: "",
                        product: "",
                        unitOfMeasure: "",
                        quantityOrdered: "",
                        quantityReceived: "",
                        lineValue: "",
                    },
                ]);
                notify()
                reset();
            },
        });
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
                        type="number"
                        step="0.0001"
                        onChange={(e) =>
                            setData("exchangeRate", e.target.value)
                        }
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
                                        unitOfMeasure: "",
                                        quantityOrdered: "",
                                        quantityReceived: "",
                                        lineValue: "",
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
                        value={calculateTotalItems(orderLines)}
                        type="number"
                        readOnly
                        onChange={(e) => setData("totalItems", e.target.value)}
                    />
                </FormItemContainer>

                <FormItemContainer>
                    <InputLabel
                        htmlFor="hashTotalQuantity"
                        value="Hash Total Quantity"
                    />
                    <TextInput
                        value={calculateHashTotalQty(orderLines)}
                        type="number"
                        step="0.01"
                        readOnly
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
                        value={calculateHashLineValue(orderLines)}
                        type="number"
                        step="0.0001"
                        readOnly
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
                    <InputLabel htmlFor="charges" value="Charges" />
                    <div>
                        <div className="flex flex-row items-center mb-[10px] min-w-[700px]">
                            <div className="w-[120px] "></div>
                            <div className="w-[198px] mr-[5px] text-center">
                                Amounts
                            </div>
                            <div className="w-[198px] mr-[5px] text-center">
                                Supplier Code
                            </div>
                            <div className="w-[198px] mr-[5px] text-center">
                                Supplier Name
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="freight" value="Freight" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("freightCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "freightSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.freightSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "freightSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="insurance" value="Insurance" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.insuranceCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("insuranceCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.insuranceSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "insuranceSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.insuranceSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "insuranceSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="handling" value="Handling" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.handlingCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("handlingCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.handlingSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "handlingSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.handlingSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "handlingSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="cartage" value="Cartage" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.cartageCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("cartageCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.cartageSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "cartageSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.cartageSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "cartageSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="other" value="Other" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.otherCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("otherCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.otherSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "otherSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.otherSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "otherSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="vat" value="VAT" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.vatCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("vatCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.vatSupplierCode}
                                onChange={(e) => {
                                    setData("vatSupplierCode", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.vatSupplierName}
                                onChange={(e) => {
                                    setData("vatSupplierName", e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mb-[10px] min-w-[700px]">
                            <InputLabel htmlFor="deposit" value="Duty" />
                            <TextInput
                                className="mr-[5px]"
                                value={data.depositCharges}
                                type="number"
                                step="0.0001"
                                onChange={(e) => {
                                    setData("depositCharges", e.target.value);
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.depositSupplierCode}
                                onChange={(e) => {
                                    setData(
                                        "depositSupplierCode",
                                        e.target.value
                                    );
                                }}
                            />
                            <TextInput
                                className="mr-[5px]"
                                value={data.depositSupplierName}
                                onChange={(e) => {
                                    setData(
                                        "depositSupplierName",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                    </div>
                </FormItemContainer>

                <PrimaryButton
                    className="ms-4"
                    disabled={false}
                    onClick={() => {
                        setData((prev) => ({
                            ...prev,
                            orderLines: JSON.stringify(data.orderLines),
                            totalItems: calculateTotalItems(orderLines),
                            hashTotalQuantity:
                                calculateHashTotalQty(orderLines),
                            hashLineValue: calculateHashLineValue(orderLines),
                        }));
                    }}
                >
                    Submit Goods Received Note
                </PrimaryButton>
                <ToastContainer position="bottom-left"/>
            </form>
        </AuthenticatedLayout>
    );
}
