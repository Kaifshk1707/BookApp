import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";

export const store = configureStore({
    reducer: {
        HomeReducer: HomeReducer,
    },
});
