export const mockOrderLine = {
    product: "Bolts",
    supplierRef: "BLT010",
    quantity: "6",
    unitPrice: "30.99",
    totalPrice: "",
}

export const anotherMockOrderLine = {
    product: "Rivets",
    supplierRef: "RVT999",
    quantity: "13.55",
    unitPrice: "69",
    totalPrice: "",
}

export const mockFormData = {
    company: "CassarCamilleri Marketing, Sales & Distribution Ltd",
    date: "2022-05-30",
    supplier: "Bolts & Rivets",
    supplierAddress: "Triq Aldo Moro",
    supplierCode: "BLTRVT999",
    deliveryDate: "2025-12-24",
    orderLines: [mockOrderLine, anotherMockOrderLine],
    paymentTerms: "30 Days Invoice",
    otherRemarks: "Extra mock information",
    discount: 10,
    netTotalValue: 0,
    priceIncludesVat: "Yes",
}

export const grnOrderLine = {
    supplierRef: "HNDGL111",
    product: "Hand Gel",
    unitOfMeasure: "Kilos",
    quantityOrdered: "10.55",
    quantityReceived: "8.77",
    lineValue: "5.55",
}

export const grnAnotherOrderLine = {
    supplierRef: "RMTS589",
    product: "Rubber Mats",
    unitOfMeasure: "Units",
    quantityOrdered: "18.56",
    quantityReceived: "10",
    lineValue: "4.5",
}

export const mockGRNFormData = {
    company: "CassarCamilleri Viticulture Ltd",
    supplier: "Momford & Sons",
    country: "Moldova",
    currency: "Yen",
    exchangeRate: "0.55",
    receivedDate: "2025-09-25",
    originCountry: "Japan",
    supplierCode: "MFRDS888",
    supplierInvoice: "INV4567",
    packingDetails: "No packaging",
    orderLines: [grnOrderLine, grnAnotherOrderLine],
    totalItems: "",
    hashTotalQuantity: "",
    hashLineValue: "",
    receivingStoreCostCenter: "San Gwann MD",
    remarks: "Some important information",
    goodsReceivedBy: "Jimmy",
    freightCharges: "52.25",
    freightSupplierCode: "ERFR555",
    freightSupplierName: "Eurofreight",
    insuranceCharges: "18.56",
    insuranceSupplierCode: "GSNMM789",
    insuranceSupplierName: "Gasan Mamo",
    handlingCharges: "87.50",
    handlingSupplierCode: "EVNHND152",
    handlingSupplierName: "Evan Handler",
    cartageCharges: "85.50",
    cartageSupplierCode: "CRTG693",
    cartageSupplierName: "Cartaging Bros",
    otherCharges: "20.00",
    otherSupplierCode: "52.30",
    otherSupplierName: "Charging Bros",
    vatCharges: "1.18",
    vatSupplierCode: "GVRNMT110",
    vatSupplierName: "Government",
    depositCharges: "12.40",
    depositSupplierCode: "DPST850",
    depositSupplierName: "Deposists Ltd",
}
