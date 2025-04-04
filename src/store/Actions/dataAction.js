import { INCREASE_TOTAL_LIKES } from "./types";


export const increaseTotalLikes = (payload) => ({
        type: INCREASE_TOTAL_LIKES,
        payload: payload,
})