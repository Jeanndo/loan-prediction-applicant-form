import {combineReducers} from 'redux';
import ApplicantInfo from './ApplicantInfo';
import siginUpReducer from './signupReducer';
import loginReducer from './loginReducer';
import LogoutReducer from './LogoutReducer';
import googleReducer from './googleLogin';

export default combineReducers({
    ApplicantInfo,
    siginUpReducer,
    loginReducer,
    LogoutReducer,
    googleReducer
})