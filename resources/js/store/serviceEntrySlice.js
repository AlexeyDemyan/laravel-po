import { createSlice } from "@reduxjs/toolkit";
import { defaultSOEntryState } from "@/default-so-entry-state";

export const serviceEntrySlice = createSlice({
    name: 'serviceOrderEntry',
    initialState: defaultSOEntryState,
    reducers: {
        updateServiceOrderEntry: (state, action) => {
            state.editing = true;
            state.orderNumber = action.payload.orderNumber;
            state.company = action.payload.company;
            state.supplier = action.payload.supplier;
            state.supplierAddress = action.payload.supplierAddress;
            state.telephone = action.payload.telephone;
            state.supplierCode = action.payload.supplierCode;
            state.supplierVATNumber = action.payload.supplierVATNumber;
            state.date = action.payload.date;
            state.referenceNumber = action.payload.referenceNumber;
            state.orderLines = action.payload.orderLines;
            state.subTotalAmount = action.payload.subTotalAmount;
            state.vatAmount = action.payload.vatAmount;
            state.totalAmount = action.payload.totalAmount;
            state.dueDate = action.payload.dueDate;
            state.paymentTerms = action.payload.paymentTerms;
            state.budgetHeadRef = action.payload.budgetHeadRef;
            state.orderFormRaisedBy = action.payload.orderFormRaisedBy;
            state.authorisedBy = action.payload.authorisedBy;
            state.userId = action.payload.userId;
            state.created_at = action.payload.created_at;
        },
        resetServiceOrderEntry: (state) => {
            state.editing = false;
            state.orderNumber = null;
            state.company = "Marsovin Winery Ltd";
            state.supplier = "";
            state.supplierAddress = "";
            state.telephone = "";
            state.supplierCode = "";
            state.supplierVATNumber = "";
            state.date = "";
            state.referenceNumber = "";
            state.orderLines = [
                {
                    details: "",
                    price: "",
                },
            ];
            state.subTotalAmount = "";
            state.vatAmount = "";
            state.totalAmount = "";
            state.dueDate = "";
            state.paymentTerms = "";
            state.budgetHeadRef = "";
            state.orderFormRaisedBy = "";
            state.authorisedBy = "";
            state.userId = null;
            state.created_at = null;
        }
    }
})

export const { updateServiceOrderEntry, resetServiceOrderEntry } = serviceEntrySlice.actions;

export default serviceEntrySlice.reducer;
