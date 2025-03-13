import { createSlice } from "@reduxjs/toolkit";

export const recentEntrySlice = createSlice({
    name: 'recentEntry',
    initialState: {
        value: null
    },
    reducers: {
        setRecentEntry: (state, action) => {
            state.value = action.payload;
        },
        resetRecentEntry: (state) => {
            state.value = null;
        }
    }
});

export const { setRecentEntry, resetRecentEntry } = recentEntrySlice.actions;

export default recentEntrySlice.reducer;
