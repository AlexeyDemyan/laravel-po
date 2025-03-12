import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'entry',
    initialState: {
        editing: false,
        company: "Marsovin Winery Ltd",
        date: "",
        supplier: "",
        orderNumber: null,
        supplierAddress: "",
        supplierCode: "",
        deliveryDate: "",
        orderLines: [
            {
                product: "",
                supplierRef: "",
                quantity: "",
                unitPrice: "",
                totalPrice: "",
            },
        ],
        paymentTerms: "",
        otherRemarks: "",
        discount: "",
        netTotalValue: "",
        priceIncludesVat: "Yes",
        userId: null,
        created_at: null,
    },
    reducers: {
        incrementDiscount: (state) => {state.orderNumber++},
        updateEntry: (state, action) => {
            console.log(action.payload);
            state.editing = true;
            state.company = action.payload.company;
            state.date = action.payload.date;
            state.supplier = action.payload.supplier;
            state.orderNumber = action.payload.orderNumber;
            state.supplierAddress = action.payload.supplierAddress;
            state.supplierCode = action.payload.supplierCode;
            state.deliveryDate = action.payload.deliveryDate;
            state.orderLines = action.payload.orderLines;
            state.paymentTerms = action.payload.paymentTerms;
            state.otherRemarks = action.payload.otherRemarks;
            state.discount = action.payload.discount;
            state.discount = action.payload.discount;
            state.netTotalValue = action.payload.netTotalValue;
            state.priceIncludesVat = action.payload.priceIncludesVat;
            state.userId = action.payload.userId;
            state.created_at = action.payload.created_at;
        }
    }
});

export const { incrementDiscount, updateEntry } = counterSlice.actions;

export default counterSlice.reducer;


