import { createSlice } from "@reduxjs/toolkit";
import { defaultPOEntryState } from "@/default-po-entry-state";

export const counterSlice = createSlice({
    name: 'entry',
    initialState: defaultPOEntryState,
    reducers: {
        incrementDiscount: (state) => { state.orderNumber++ },
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
        },
        resetEntry: (state) => {
            state.editing = false;
            state.date = "";
            state.company = "Marsovin Winery Ltd";
            state.supplier = "";
            state.orderNumber = null;
            state.supplierAddress = "";
            state.supplierCode = "";
            state.deliveryDate = "";
            state.orderLines = [
                {
                    product: "",
                    supplierRef: "",
                    quantity: "",
                    unitPrice: "",
                    totalPrice: "",
                },
            ];
            state.paymentTerms = "";
            state.otherRemarks = "";
            state.discount = "";
            state.netTotalValue = "";
            state.priceIncludesVat = "Yes";
            state.userId = null;
            state.created_at = null;
        }
    }
});

export const { incrementDiscount, updateEntry, resetEntry } = counterSlice.actions;

export default counterSlice.reducer;


