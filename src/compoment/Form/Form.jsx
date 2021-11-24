import * as React from "react";


const Form = () => {

  const [sex, setSex] = React.useState('');
  const [education, setEducation] = React.useState('');
  const [employed, setEmployed] = React.useState('');
  const [credit, setCredit] = React.useState(0);
  const [property, setProperty] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
    
  };
  const handleEducation = (event) => {
    setEducation(event.target.value);
    
  };
  const handleEmployement = (event) => {
    setEmployed(event.target.value);
    
  };
const handleCredit = (event)=>{
  setCredit(event.target.value);
}
const handlePropeerty = (event)=>{
  setProperty(event.target.value);
}
  return (
  <div className="loan-applicant-form-container">
  <form>
      <div>
       <input type="text" placeholder="First Name" required className="first-name"/>
        <input type="text" placeholder="Last Name" required className="last-name"/>
      </div>
      <div>
        <input  type="date" required/>
       <select
       onChange={handleChange}
       >
         <option >Select</option>
         <option>Male</option>
         <option >Female</option>
       </select>
      </div>
      <div>
        <input type="text" required type="email" placeholder="Email" />
        <input type="text" required placeholder="Phone" />
      </div>
      <div>
        <input type="number" required placeholder="Dependences" />
       <select
       onChange={handleEducation}
       >
         <option >Select</option>
         <option>Graduate</option>
         <option >Not Graduate</option>
       </select>
       <select
       onChange={handleEmployement}
       >
         <option >Select</option>
         <option>Yes</option>
         <option >No</option>
       </select>
      </div>
      <div>
        <input type="number"required placeholder="Applicant Income"/>
        <input type="number"required placeholder="Coapplicant Income"/>
        <input type="number" required placeholder="Loan Amount" />
      </div>
      <div>
        <input tye="number" placeholder="Loan Amount Term" required/>
       <select
       onChange={handleCredit}
       >
         <option >Select</option>
         <option>0</option>
         <option >1</option>
       </select>
        <select
       onChange={handlePropeerty}
       >
         <option >Select</option>
         <option>Urban</option>
         <option >Middle urban</option>
         <option >Rural</option>
       </select>
      </div>
      <div className="submit-btn-container">
        <button className="submit-btn">Submit</button>
        <button className="cancel-btn">Cancel</button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fill-opacity="1"
            d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,165.3C560,171,640,149,720,128C800,107,880,85,960,101.3C1040,117,1120,171,1200,197.3C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </form>
    </div>
  );
};

export default Form;
