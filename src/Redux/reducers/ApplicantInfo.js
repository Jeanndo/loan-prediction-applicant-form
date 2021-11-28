import * as type from '../actions/types/actionTypes';

const initialState = {
    saveApplicantInfo:{
        message:null,
        loading:false,
        error:null,
        success:false
    }
}


const ApplicantInfo = (state= initialState, action)=>{

    switch(action.type){
        case type.ADD_USER_START:
            return {
                ...state,
                saveApplicantInfo:{
                    message:null,
                    loading:true,
                    error:null,
                    success:false
                }
            }
        case type.ADD_USER_SUCCESS:
            return {
                ...state,
                saveApplicantInfo:{
                    message:action.payload,
                    loading:false,
                    error:null,
                    success:true
                }
            }
        case type.ADD_USER_FAILURE:
            return {
                ...state,
                saveApplicantInfo:{
                    message:null,
                    loading:false,
                    error:action.payload,
                    success:false
                }
            }
        default:
            return state;
    }

}

export default ApplicantInfo