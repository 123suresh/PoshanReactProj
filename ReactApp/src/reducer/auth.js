import * as types from "../constant/actionTypes";
const INITIAL_STATE = {
  isAuthenticated: "",
};
function Auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
}

export default Auth;
