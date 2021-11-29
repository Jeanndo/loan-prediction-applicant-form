import {combineReducers} from 'redux';
import ApplicantInfo from './ApplicantInfo';
import siginUpReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    ApplicantInfo,
    siginUpReducer,
    loginReducer
})