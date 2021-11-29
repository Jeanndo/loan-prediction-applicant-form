import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GOOGLE_LOGIN_START,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE
} from "./types/actionTypes";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNUukDWvcVgYyAaqn4q2R9vvFUFgdEcBE",
  authDomain: "loan-prediction-cf0a9.firebaseapp.com",
  projectId: "loan-prediction-cf0a9",
  storageBucket: "loan-prediction-cf0a9.appspot.com",
  messagingSenderId: "1025166285511",
  appId: "1:1025166285511:web:fab836cea56fc86445fce2",
  measurementId: "G-51TQ4JP2LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const Signup =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: SIGNUP_START,
    });
  
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

export const Login =({ email, password }) => async (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });

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

export const GoogleLogin = ()=>async(dispatch)=>{
   dispatch({
     type:GOOGLE_LOGIN_START
   })
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // console.log("google",user);
    return dispatch({
      type:GOOGLE_LOGIN_SUCCESS,
      payload:{user:user,token:token}
    })
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return dispatch({
      type:GOOGLE_LOGIN_FAILURE,
      payload:{errorCode:errorCode,errorMessage:errorMessage,email:email,credential:credential}
    })
    // ...
  });


}

  export const Logout = ()=>async(dispatch)=>{
       dispatch({
         type:LOGOUT_START
       })
  
    signOut(auth).then(() => {
      const message ="USER LOGED OUT SUCCESSFULLY!!!";
      return dispatch({
        type:LOGOUT_SUCCESS,
        payload:message
      })
    }).catch((error) => {
      const errorMessage = error.message;
      return dispatch({
        type:LOGOUT_FAILURE,
        payload:errorMessage
      })
    });
  }
