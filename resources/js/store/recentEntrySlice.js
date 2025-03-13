import { createSlice } from "@reduxjs/toolkit";

export const recentEntrySlice = createSlice({
    name: 'recentEntry',
    initialState: {
        value: null
    },
    reducers: {
        setRecentEntry: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        },
        resetRecentEntry: (state) => {
            state = null;
        }
    }
});

export const { setRecentEntry, resetRecentEntry } = recentEntrySlice.actions;

export default recentEntrySlice.reducer;
