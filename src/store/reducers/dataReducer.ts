import { INCREASE_LIKE_COUNT, INCREASE_LIKE_BY_AMOUNT } from "../type";

const initialState = {
  totalLikes: 0,
};

const dataReducer = (
  state = initialState,
  action: { type: any; payload: number }
) => {
  switch (action.type) {
    case INCREASE_LIKE_COUNT:
      return { ...state, totalLikes: state.totalLikes + 1 }; // static passing number

    case INCREASE_LIKE_BY_AMOUNT:
      return { ...state, totalLikes: state.totalLikes + action.payload }; //action.payload is the value that we want to increase the totalLikes by

    default:
      return state;
  }
};

export { dataReducer };
