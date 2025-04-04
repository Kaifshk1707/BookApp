import { CHANGE_ROLE } from "../Actions/types"

const initialState = {
role:"Owner",
}
 
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_ROLE:
    return {
      ...state,
      role: action.payload,
    }

  default:
    return state
  }
}
