import { createSlice } from "@reduxjs/toolkit";

export const recentServiceEntrySlice = createSlice({
    name: 'recentServiceEntry',
    initialState: {
        value: null
    },
    reducers: {
        setRecentServiceEntry: (state, action) => {
            state.value = action.payload;
        },
        resetRecentServiceEntry: (state) => {
            state.value = null;
        }
    }
})

export const { setRecentServiceEntry, resetRecentServiceEntry } = recentServiceEntrySlice.actions;

export default recentServiceEntrySlice.reducer;
