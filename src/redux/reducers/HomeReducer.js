import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalLikes: 0,
};

const HomeReducer = createSlice({
    name: "HomeReducer",
    initialState,
    reducers: {
        increaseLikes: (state) => {
            state.totalLikes += 1;
        },
    },
});

export const { increaseLikes } = HomeReducer.actions;
export default HomeReducer.reducer;
