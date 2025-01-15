import { useRef } from "react";
import SecondaryButton from "./SecondaryButton";
import FormItemContainer from "./FormItemContainer";
import { useReactToPrint } from "react-to-print";
import { formatDate } from "@/utils.js";

const orderLinesCount = 13;

export default function GRNPreviewPrint({ entry, onCancel }) {
    console.log(entry);

    const {
        created_at,
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

    const formattedDate = formatDate(date);

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

    const createdYear = new Date(created_at).getFullYear();

    const parsedOrderLines = JSON.parse(orderLines);
    console.log(parsedOrderLines);

    const renderedOrderLine = (line, index) => {
        return (
            <tr key={index}>
                <td
                    style={{
                        minWidth: 400,
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
                    {line.supplierRef}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.quantity}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.unitPrice}
                </td>
                <td
                    style={{
                        height: 25,
                        textAlign: "center",
                        border: "1px solid black",
                    }}
                >
                    {line.totalPrice}
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
                    }}
                >
                    <header
                        className="header"
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: 20,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
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
                            }}
                        >
                            GRN # {createdYear}-{orderNumber}
                        </div>
                    </header>

                    <div
                        className="section section__supplier"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "500px 500px",
                            gridTemplateRows: "50px 50px 50px",
                            marginBottom: 20,
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
                            className="supplier-code"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="supplier-code--title"
                                style={{ width: 140 }}
                            >
                                Supplier Code
                            </div>
                            <div
                                className="supplier-code--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {supplierCode}
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
                                Address
                            </div>
                            <div
                                className="supplier-address--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            >
                                {supplierAddress}
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
                                Date
                            </div>
                            <div
                                className="supplier-date--text"
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
                            />
                            <div
                                className="supplier-address--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
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
                                Order
                            </div>
                            <div
                                className="supplier-order--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="section section__po-entry-lines"
                        style={{ display: "grid" }}
                    >
                        <table style={{ borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    <th style={{ border: "3px solid black" }}>
                                        Product
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Supplier Ref
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Quantity
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Unit Price €
                                    </th>
                                    <th style={{ border: "3px solid black" }}>
                                        Total Price €
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
                            display: "grid",
                            gridTemplateColumns: "500px 500px",
                            gridTemplateRows: "50px 50px 120px",
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
                                Delivery Date
                            </div>
                            <div
                                className="delivery-date--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
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
                                Discount
                            </div>
                            <div
                                className="discount--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
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
                                Payment Terms
                            </div>
                            <div
                                className="payment-terms--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
                        </div>
                        <div
                            className="net-total-value"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="net-total-value--title"
                                style={{ width: 140 }}
                            >
                                Net Total Value
                            </div>
                            <div
                                className="net-total-value--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
                        </div>
                        <div
                            className="other-remarks"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="other-remarks--title"
                                style={{ width: 140 }}
                            >
                                Other Remarks
                            </div>
                            <div
                                className="other-remarks--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
                        </div>
                        <div
                            className="price-includes-vat"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "end",
                            }}
                        >
                            <div
                                className="price-includes-vat--title"
                                style={{ width: 140 }}
                            >
                                Price Includes VAT
                            </div>
                            <div
                                className="price-includes-vat--text"
                                style={{
                                    width: 300,
                                    borderBottom: "1px solid black",
                                }}
                            />
                        </div>
                    </div>
                    <footer
                        className="footer"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="conditions">
                            <div
                                className="conditions-header"
                                style={{
                                    marginTop: 20,
                                    height: 20,
                                    fontWeight: 600,
                                }}
                            >
                                <p>Conditions:</p>
                            </div>
                            <div className="conditions-list">
                                <ul>
                                    <li>
                                        <p>
                                            Please issue Delivery Note / Invoice
                                            to the above indicated company
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Please quote P/O No on Delivery Note
                                            / Invoice
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            For Local Deliveries please deliver
                                            between 7:30 - 10:45 &amp; 11:30 -
                                            15:00
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            All deliveries are to be consigned
                                            to Stores Personnel only
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="signature" style={{ paddingTop: 100 }}>
                            <p
                                className="signature-text"
                                style={{
                                    textAlign: "center",
                                    width: 300,
                                    borderTop: "1px solid black",
                                    paddingTop: 30,
                                }}
                            >
                                Authorised Signature
                            </p>
                        </div>
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
