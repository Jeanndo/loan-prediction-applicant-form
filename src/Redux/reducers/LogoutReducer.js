import * as type from "../actions/types/actionTypes";

const initialState = {
  logout: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
};

const LogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGOUT_START:
      return {
        ...state,
        logout: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      };
    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        logout: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };
    case type.LOGOUT_FAILURE:
      return {
        ...state,
        logout: {
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

export default LogoutReducer;