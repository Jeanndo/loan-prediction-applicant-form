import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import ApplicationForm from '../compoment/loan-applicant-form'
import Landing from "../compoment/Landing/Landing";
import Signup from "../compoment/Auth/Signup";
import ApplicantList from "../compoment/ApplicantList/ApplicantList";

class MyRoutes extends React.Component {
    render() {
      return (
        <Routes> 
           <Route exact path="/" element={<Landing/>}/>
           <Route exact path="/applicant_form" element={<ApplicationForm/>}/>
           <Route exact path="/signup" element={<Signup/>}/>
           <Route exact path="/applicantlist" element={<ApplicantList/>}/>
        </Routes>
    );
   }
  }
  export default MyRoutes;