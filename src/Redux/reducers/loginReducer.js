import * as type from "../actions/types/actionTypes";

const initialState = {
  login: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

 const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_START:
      return {
        ...state,
        login: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.LOGIN_FAILURE:
      return {
        ...state,
        login: {
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

export default loginReducer;
