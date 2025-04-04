import { CHANGE_ROLE } from "./types";


export const changeUserRole = (payload) => ({
        type: CHANGE_ROLE,
        payload: payload,
})

