import { useRef } from "react";
import SecondaryButton from "./SecondaryButton";
import FormItemContainer from "./FormItemContainer";
import { useReactToPrint } from "react-to-print";
import { formatDate, getOrderNumberWithYear } from "@/utils.js";

const orderLinesCount = 10;

export default function SOPreviewPrint({ entry, onCancel }) {
    console.log(entry);

    const {
        company,
        supplier,
        country,
        currency,
        exchangeRate,
        receivedDate,
        originCountry,
        supplierCode,
        supplierInvoice,
        packingDetails,
        orderLines,
        totalItems,
        hashTotalQuantity,
        hashLineValue,
        receivingStoreCostCenter,
        remarks,
        goodsReceivedBy,
        freightCharges,
        freightSupplierCode,
        freightSupplierName,
        insuranceCharges,
        insuranceSupplierCode,
        insuranceSupplierName,
        handlingCharges,
        handlingSupplierCode,
        handlingSupplierName,
        cartageCharges,
        cartageSupplierCode,
        cartageSupplierName,
        otherCharges,
        otherSupplierCode,
        otherSupplierName,
        vatCharges,
        vatSupplierCode,
        vatSupplierName,
        depositCharges,
        depositSupplierCode,
        depositSupplierName,
    } = entry;

    const formattedDate = formatDate(receivedDate);

    const isMarsovinWinery = () => {
        if (company === "Marsovin Winery Ltd") {
            return <div>&#10004;</div>;
        }
        return "";
    };

    const isCassarCamilleriViticulture = () => {
        if (company === "CassarCamilleri Viticulture Ltd") {
            return <div>&#10004;</div>;
        }
        return "";
    };

    const isMSD = () => {
        if (company === "CassarCamilleri MSD Ltd") {
            return <div>&#10004;</div>;
        }
        return "";
    };

    const parsedOrderLines = JSON.parse(orderLines);
    console.log(parsedOrderLines);

    const renderedOrderLine = (line, index) => {
        return (
            <tr key={index}>
                <td
                    style={{
                        minWidth: 150,
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.supplierRef}
                </td>
                <td
                    style={{
                        minWidth: 300,
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.product}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.unitOfMeasure}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.quantityOrdered}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.quantityReceived}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.lineValue}
                </td>
            </tr>
        );
    };

    const orderLinesFilledWithDuds = (lines) => {
        let result = [...lines];

        for (let i = 0; i < orderLinesCount - lines.length; i++) {
            result.push({
                product: "",
                supplierRef: "",
                quantity: "",
                unitPrice: "",
                totalPrice: "",
            });
        }

        return result;
    };

    const linesWithDuds = orderLinesFilledWithDuds(parsedOrderLines);

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div>
            <div
                ref={contentRef}
                style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: "#1f2937",
                }}
            >
                <div
                    style={{
                        width: 950,
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        size: "7in 9.25in",
                        marginTop: "20px",
                    }}
                >
                    <header
                        className="header"
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: 80,
                            borderBottom: "1px solid black",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            GOODS RECEIVED NOTE
                        </div>
                        <div
                            className="section section__company-list"
                            style={{ display: "grid" }}
                        >
                            <ul style={{ listStyle: "none" }}>
                                <li
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        alignItems: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    <div
                                        className="company"
                                        style={{
                                            marginRight: 20,
                                            width: 230,
                                            textAlign: "left",
                                        }}
                                    >
                                        Marsovin Winery Ltd
                                    </div>
                                    <div
                                        className="tickbox"
                                        style={{
                                            marginRight: 20,
                                            height: 24,
                                            width: 24,
                                            border: "2px solid black",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        {isMarsovinWinery()}
                                    </div>
                                </li>
                                <li
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    <div
                                        className="company"
                                        style={{
                                            marginRight: 20,
                                            width: 230,
                                            textAlign: "left",
                                        }}
                                    >
                                        CassarCamilleri Viticulture Ltd
                                    </div>
                                    <div
                                        className="tickbox"
                                        style={{
                                            marginRight: 20,
                                            height: 24,
                                            width: 24,
                                            border: "2px solid black",
                                        }}
                                    >
                                        {isCassarCamilleriViticulture()}
                                    </div>
                                </li>
                                <li
                                    style={{
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    <div
                                        className="company"
                                        style={{
                                            marginRight: 20,
                                            width: 230,
                                            textAlign: "left",
                                        }}
                                    >
                                        CassarCamilleri MSD Ltd
                                    </div>
                                    <div
                                        className="tickbox"
                                        style={{
                                            marginRight: 20,
                                            height: 24,
                                            width: 24,
                                            border: "2px solid black",
                                        }}
                                    >
                                        {isMSD()}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="section section__title"
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                fontSize: 20,
                                fontWeight: 700,
                            }}
                        >
                            GRN # {getOrderNumberWithYear(entry)}
                        </div>
                    </header>

                    <div
                        className="section section__supplier"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "500px 500px",
                            gridTemplateRows: "30px 30px 30px 30px 30px",
                            marginBottom: 20,
                            marginTop: 30,
                        }}
                    >
                        <div
                            className="supplier-name"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-name--title"
                                style={{ width: 140 }}
                            >
                                Supplier
                            </div>
                            <div
                                className="supplier-name--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {supplier}
                            </div>
                        </div>
                        <div
                            className="received-date"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="received-date--title"
                                style={{ width: 140 }}
                            >
                                Date Received
                            </div>
                            <div
                                className="received-date--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {formattedDate}
                            </div>
                        </div>
                        <div
                            className="supplier-address"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-address--title"
                                style={{ width: 140 }}
                            >
                                Country
                            </div>
                            <div
                                className="supplier-address--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {country}
                            </div>
                        </div>
                        <div
                            className="supplier-date"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-date--title"
                                style={{ width: 140 }}
                            >
                                Country of Origin
                            </div>
                            <div
                                className="supplier-date--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {originCountry}
                            </div>
                        </div>
                        <div
                            className="supplier-address"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-address--title"
                                style={{ width: 140 }}
                            >
                                Currency
                            </div>
                            <div
                                className="supplier-address--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {currency}
                            </div>
                        </div>
                        <div
                            className="supplier-order"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-order--title"
                                style={{ width: 140 }}
                            >
                                Supplier Code
                            </div>
                            <div
                                className="supplier-order--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {supplierCode}
                            </div>
                        </div>
                        <div
                            className="supplier-order"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-order--title"
                                style={{ width: 180 }}
                            >
                                Exhange Rate EUR 1 =
                            </div>
                            <div
                                className="supplier-order--text"
                                style={{
                                    width: 260,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {exchangeRate}
                            </div>
                        </div>
                        <div
                            className="supplier-order"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-order--title"
                                style={{ width: 140 }}
                            >
                                Supplier Invoice
                            </div>
                            <div
                                className="supplier-order--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {supplierInvoice}
                            </div>
                        </div>
                        <div
                            className="supplier-order"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-order--title"
                                style={{ width: 140 }}
                            >
                                Packing Details
                            </div>
                            <div
                                className="supplier-order--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {packingDetails}
                            </div>
                        </div>
                    </div>
                    <div
                        className="section section__po-entry-lines"
                        style={{ display: "grid" }}
                    >
                        <table
                            style={{
                                borderCollapse: "collapse",
                                marginTop: 30,
                            }}
                        >
                            <tbody>
                                <tr>
                                    <th style={{ border: "3px solid black" }}>
                                        Supplier Ref
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Product
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Unit of Measure
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        QTY Ordered
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Qty Recd in Good Order
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Line value in EUR
                                    </th>
                                </tr>
                                {linesWithDuds.map((line) =>
                                    renderedOrderLine(line)
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="section section__bottom-info"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 20,
                        }}
                    >
                        <div
                            className="delivery-date"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="delivery-date--title"
                                style={{ width: 140 }}
                            >
                                Total Items
                            </div>
                            <div
                                className="delivery-date--text"
                                style={{
                                    width: 150,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {totalItems}
                            </div>
                        </div>
                        <div
                            className="discount"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="discount--title"
                                style={{ width: 140 }}
                            >
                                Hash Total Qty
                            </div>
                            <div
                                className="discount--text"
                                style={{
                                    width: 150,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {hashTotalQuantity}
                            </div>
                        </div>
                        <div
                            className="payment-terms"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="payment-terms--title"
                                style={{ width: 140 }}
                            >
                                Hash Line Value
                            </div>
                            <div
                                className="payment-terms--text"
                                style={{
                                    width: 150,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {hashLineValue}
                            </div>
                        </div>
                    </div>
                    <div
                        className="section"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid black",
                            padding: 10,
                            paddingRight: 100,
                            marginTop: 30,
                        }}
                    >
                        <div
                            className="receivingstore"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <div
                                className="receivingstore--title"
                                style={{
                                    width: 300,
                                }}
                            >
                                Receiving Store / Cost Centre
                            </div>
                            <div
                                className="receivingstore--text"
                                style={{
                                    width: 650,
                                    borderBottom: "1px dotted black",
                                }}
                            >
                                {receivingStoreCostCenter}
                            </div>
                        </div>
                        <div
                            className="remarks"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <div
                                className="remarks--title"
                                style={{
                                    width: 300,
                                }}
                            >
                                Remarks
                            </div>
                            <div
                                className="remarks--text"
                                style={{
                                    width: 650,
                                    borderBottom: "1px dotted black",
                                }}
                            >
                                {remarks}
                            </div>
                        </div>
                        <div
                            className="goodsreceivedby"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <div
                                className="goodsreceivedby--title"
                                style={{
                                    width: 300,
                                }}
                            >
                                Goods Received By
                            </div>
                            <div
                                className="goodsreceivedby--text"
                                style={{
                                    width: 650,
                                    borderBottom: "1px dotted black",
                                }}
                            >
                                {goodsReceivedBy}
                            </div>
                        </div>
                        <div
                            className="signature"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <p>(Signature & Name in full)</p>
                        </div>
                    </div>
                    <footer
                        className="footer"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            border: "1px solid black",
                            marginTop: 50,
                            padding: 10,
                        }}
                    >
                        <table style={{ borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    <th>CHARGES:</th>
                                    <th></th>
                                    <th style={{ border: "3px solid black" }}>
                                        Supplier Code
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Supplier Name
                                    </th>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Freight
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {freightCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {freightSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {freightSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Insurance
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {insuranceCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {insuranceSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {insuranceSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Handling Charges
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {handlingCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {handlingSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {handlingSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Cartage
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {cartageCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {cartageSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {cartageSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Other Charges
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {otherCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {otherSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {otherSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        VAT
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {vatCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {vatSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {vatSupplierName}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        Duty
                                    </td>
                                    <td
                                        style={{
                                            width: 340,
                                            height: 25,
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 240,
                                                borderBottom:
                                                    "1px dotted black",
                                            }}
                                        >
                                            &#8364; {depositCharges}
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {depositSupplierCode}
                                    </td>
                                    <td
                                        style={{
                                            width: 200,
                                            height: 25,
                                            border: "1px solid black",
                                            textAlign: "left",
                                            paddingLeft: 20,
                                        }}
                                    >
                                        {depositSupplierName}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </footer>
                </div>
            </div>

            <FormItemContainer className="justify-around mb-[30px] mt-[30px]">
                <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
                <SecondaryButton
                    onClick={() => {
                        reactToPrintFn();
                    }}
                >
                    Print
                </SecondaryButton>
            </FormItemContainer>
        </div>
    );
}
