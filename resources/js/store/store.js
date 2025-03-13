import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import recentEntryReducer from "./recentEntrySlice";

export default configureStore({
    reducer: {
        entry: counterReducer,
        recentEntry: recentEntryReducer
    }
});
