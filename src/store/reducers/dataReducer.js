

import { INCREASE_TOTAL_LIKES } from "../Actions/types";
const initialState = {
    likes: 0,
    userName: 'John Doe',
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE_TOTAL_LIKES:
        return {
          ...state,
          likes: state.likes + 1,
        };

      default:
        return state;
    }
}