import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import recentEntryReducer from "./recentEntrySlice";
import serviceEntryReducer from "./serviceEntrySlice";
import recentServiceEntryReducer from "./recentServiceEntrySlice";

export default configureStore({
    reducer: {
        entry: counterReducer,
        recentEntry: recentEntryReducer,
        serviceOrderEntry: serviceEntryReducer,
        recentServiceOrderEntry: recentServiceEntryReducer
    }
});
