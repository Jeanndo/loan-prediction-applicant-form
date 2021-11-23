import React from 'react'
import FormHeader from './form-header'
import Form from './Form/Form'
import Navigation from './Navigation';
const ApplicantForm = () => {
    return (
        <div className="loan_application_form_container">
         <div className="Top-navigation">
         <Navigation/> 
         <div className="analysis-design">
             &nbsp;
         </div>
         </div>
         <div className="bottom-part">
           <div className="Form-fields-container">
             files
           </div>
         </div>
        </div>
    )
}

export default ApplicantForm
