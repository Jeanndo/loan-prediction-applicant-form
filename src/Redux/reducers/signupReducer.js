import * as type from "../actions/types/actionTypes";

const initialState = {
  signUp: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

 const siginUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SIGNUP_START:
      return {
        ...state,
        signUp: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.SIGNUP_FAILURE:
      return {
        ...state,
        signUp: {
          message: null,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default siginUpReducer;
