import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userRole: "Admin",
};

const ProfileReducer = createSlice({
    name: "ProfileReducer",
    initialState,
    reducers: {
        setUserRole(state) {
            state.userRole = "User";
        },
    },
});

export const { setUserRole } = ProfileReducer.actions;
export default ProfileReducer.reducer;
