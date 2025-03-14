import { INCREASE_LIKE_COUNT, INCREASE_LIKE_COUNT_AMOUNT } from "../type";

const initialState = {
  // data: []
  totalLikes: 0,
  totalDislikes: 0,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_LIKE_COUNT:
      return { ...state, totalLikes: state.totalLikes + 1 };
    case INCREASE_LIKE_COUNT_AMOUNT:
      return { ...state, totalLikes: state.totalLikes + action.payload };
    default:
      return state;
  }
};

export { dataReducer };
