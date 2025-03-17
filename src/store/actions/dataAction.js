import { INCREASE_LIKE_COUNT, INCREASE_LIKE_BY_AMOUNT } from "../type";

export const increaseLikeCount = () => {
  return {
    type: INCREASE_LIKE_COUNT,
  };
};

export const increaseLikeCountAmount = (payload) => {
  return {
    type: INCREASE_LIKE_BY_AMOUNT,
    payload: payload,
  };
};
