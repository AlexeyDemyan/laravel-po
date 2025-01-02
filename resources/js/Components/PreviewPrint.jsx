export default function PreviewPrint() {
    return (
        <div className="container">
            <header className="header">
                <div className="header__logo">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="-50 0 850 672"
                    >
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: "\n                .cls-1 {\n                  fill: #231f20;\n                  stroke-width: 0px;\n                }\n              ",
                                }}
                            />
                        </defs>
                        <path
                            className="cls-1"
                            d="M509.28,176.95h-60.85c-8.47-8.71-17.74-16.63-27.75-23.66l20.98-57.77s-54.73.09-54.68.04c-32.37-23.83-72.35-37.95-115.61-37.95-108.12,0-195.79,87.62-195.79,195.75,0,35.05,9.22,67.94,25.36,96.38l26.47,37.39c2.66,5.05,5.59,10.02,8.87,14.91l132.95,186.77c-105.88-28.85-183.96-125.05-185.43-239.75l-1.07-1.55c-.95-1.66-1.87-3.35-2.77-5.05-.02.72-.03,1.44-.03,2.16,0,118.81,80.63,218.79,190.14,248.21,109.52-29.42,190.14-129.4,190.14-248.21,0-23.22-3.07-45.72-8.84-67.11l12.96-22.5c8.39,26.58,12.94,54.88,12.94,84.24,0,129.58-87.94,238.59-207.37,270.67-119.42-32.08-207.39-141.09-207.39-270.67,0-11.57.74-22.96,2.11-34.17-5.26-17.64-8.23-36.27-8.55-55.53-8.41,27.99-12.98,57.65-12.98,88.39,0,141.72,96.17,260.96,226.81,296.05,130.62-35.09,226.79-154.33,226.79-296.05,0-37.36-6.7-73.13-18.96-106.23l31.55-54.77ZM432.05,191.92c.18.2.38.38.56.57h0c2.44,2.5,4.85,5.79,7.14,8.44h30.64l-112.57,195.09h-42.52l5.91-33.51-6.05-17.13h35.7l61.89-170.41c6.79,5.16,13.23,10.8,19.28,16.95ZM109.81,317.58c-8.07-20.32-12.33-42.14-12.33-64.22,0-95.88,78.01-173.85,173.89-173.85,37.31,0,72.77,11.69,102.63,33.67l6.91,5.48h28.77l-8.26,22.76c-18.12-9.77-38.11-16.83-59.54-20.6-106.82-18.84-214.11,51.93-229.6,159.29-1.93,13.34-2.72,25.76-2.48,37.48ZM154.36,389.56c-20.54-30.91-26.62-62.73-20.33-106.33,11.81-81.81,86.25-143.52,173.15-143.52,10.32,0,20.72.91,30.87,2.7,19.84,3.51,38.63,10.33,55.73,20.06l-57.95,159.66-28.75.27-28.33-80.37-4.6,4.06c-29.65,24.78-40.46,64.31-37.64,96.5,2.4,35.28,32.74,70.18,32.74,70.18,19.31,23.92,28.02,41.74,27.47,71.71-.31,17.41-11.43,41.45-27.65,65.06l-114.72-159.96ZM298.57,364.54l-6.96,39.27c-2.3-3.2-4.72-6.48-7.4-9.94-8.25-13.62-21.81-29.27-24.53-50.78-3.9-26.08,10.85-54.64,10.85-54.64l28.04,76.09ZM456.4,345.83c0,116.02-78.47,213.68-185.22,242.9,7-9.51,48.44-67.39,48.44-105.46-.18-25.78-4.77-43.34-18.42-65.28h69.29l77.9-135.31c5.21,20.19,8.01,41.35,8.01,63.15Z"
                        />
                    </svg>
                </div>
                <div className="header__company">CassarCamilleri</div>
                <div className="header__address">
                    <div>
                        <div>Wills Street</div>
                        <div>Paola, PLA2234</div>
                        <div>Malta</div>
                    </div>
                    <div>
                        <div>Tel: 21 824918/19/20</div>
                        <div>Tel: 23 662401</div>
                        <div>Tel: 21 820576</div>
                    </div>
                </div>
            </header>
            <div className="section section__title">Purchase Order #</div>
            <div className="section section__company-list">
                <ul>
                    <li>
                        <div className="company">Marsovin Winery Ltd</div>
                        <div className="tickbox">✔</div>
                        <div className="vat">VAT No: MT 1002-2806</div>
                    </li>
                    <li>
                        <div className="company">
                            CassarCamilleri Marketing, Sales &amp; Distribution
                            Ltd
                        </div>
                        <div className="tickbox">✔</div>
                        <div className="vat">VAT No: MT 1432-0606</div>
                    </li>
                    <li>
                        <div className="company">Marsovin Viticulture Ltd</div>
                        <div className="tickbox">✔</div>
                        <div className="vat">VAT No: MT 1373-8006</div>
                    </li>
                </ul>
            </div>
            <div className="section section__supplier">
                <div className="supplier-name">
                    <div className="supplier-name--title">Supplier</div>
                    <div className="supplier-name--text" />
                </div>
                <div className="supplier-code">
                    <div className="supplier-code--title">Supplier Code</div>
                    <div className="supplier-code--text" />
                </div>
                <div className="supplier-address">
                    <div className="supplier-address--title">Address</div>
                    <div className="supplier-address--text" />
                </div>
                <div className="supplier-date">
                    <div className="supplier-date--title">Date</div>
                    <div className="supplier-date--text" />
                </div>
                <div className="supplier-address">
                    <div className="supplier-address--title" />
                    <div className="supplier-address--text" />
                </div>
                <div className="supplier-order">
                    <div className="supplier-order--title">Order</div>
                    <div className="supplier-order--text" />
                </div>
            </div>
            <div className="section section__po-entry-lines">
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Supplier Ref</th>
                            <th>Quantity</th>
                            <th>Unit Price €</th>
                            <th>Total Price €</th>
                        </tr>
                        <tr className="table-row-1">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-2">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-3">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-4">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-5">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-6">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-7">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-8">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-9">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-10">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-11">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-12">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr className="table-row-13">
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="section section__bottom-info">
                <div className="delivery-date">
                    <div className="delivery-date--title">Delivery Date</div>
                    <div className="delivery-date--text" />
                </div>
                <div className="discount">
                    <div className="discount--title">Discount</div>
                    <div className="discount--text" />
                </div>
                <div className="payment-terms">
                    <div className="payment-terms--title">Payment Terms</div>
                    <div className="payment-terms--text" />
                </div>
                <div className="net-total-value">
                    <div className="net-total-value--title">
                        Net Total Value
                    </div>
                    <div className="net-total-value--text" />
                </div>
                <div className="other-remarks">
                    <div className="other-remarks--title">Other Remarks</div>
                    <div className="other-remarks--text" />
                </div>
                <div className="price-includes-vat">
                    <div className="price-includes-vat--title">
                        Price Includes VAT
                    </div>
                    <div className="price-includes-vat--text" />
                </div>
            </div>
            <footer className="footer">
                <div className="conditions">
                    <div className="conditions-header">
                        <p>Conditions:</p>
                    </div>
                    <div className="conditions-list">
                        <ul>
                            <li>
                                <p>
                                    Please issue Delivery Note / Invoice to the
                                    above indicated company
                                </p>
                            </li>
                            <li>
                                <p>
                                    Please quote P/O No on Delivery Note /
                                    Invoice
                                </p>
                            </li>
                            <li>
                                <p>
                                    For Local Deliveries please deliver between
                                    7:30 - 10:45 &amp; 11:30 - 15:00
                                </p>
                            </li>
                            <li>
                                <p>
                                    All deliveries are to be consigned to Stores
                                    Personnel only
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="signature">
                    <p className="signature-text">Authorised Signature</p>
                </div>
            </footer>
        </div>
    );
}
