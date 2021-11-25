import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import ApplicationForm from '../compoment/loan-applicant-form'
import Landing from "../compoment/Landing/Landing";

class MyRoutes extends React.Component {
    render() {
      return (
        <Routes> 
           <Route exact path="/" element={<Landing/>}/>
           <Route exact path="/applicant_form" element={<ApplicationForm/>}/>
        </Routes>
    );
   }
  }
  export default MyRoutes;