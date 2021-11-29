import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./types/actionTypes";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Signup =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: SIGNUP_START,
    });

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        return dispatch({
          type: SIGNUP_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
       
        const errorMessage = error.message;
        return dispatch({
          type: SIGNUP_FAILURE,
          payload: errorMessage,
        });
      });
  };

export const Login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        return dispatch({
          type: LOGIN_FAILURE,
          payload: errorMessage,
        });
      });
  };
