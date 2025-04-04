import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer";
import ProfileReducer from "./reducers/ProfileReducer";

export const store = configureStore({
    reducer: {
        HomeReducer: HomeReducer,
        ProfileReducer: ProfileReducer,
    },
});
