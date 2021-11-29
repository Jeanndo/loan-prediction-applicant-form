import * as type from "../actions/types/actionTypes";

const initialState = {
  google: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
};

const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GOOGLE_LOGIN_START:
      return {
        ...state,
        google: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      };
    case type.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        google: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      };
    case type.GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        google: {
          message: null,
          laoding: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default googleReducer;
