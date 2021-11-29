import { initializeApp } from "firebase/app";


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
export default app;