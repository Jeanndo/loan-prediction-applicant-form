import React from "react";
import ApplicantPic from "../assets/jadoo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import {connect} from "react-redux";
import {message} from "antd";
import {Logout as Siginout} from '../Redux/actions/AuthAction';

const Navigation = ({Siginout,logout}) => {

  const navigate = useNavigate();
  
  const handleLogout = async ()=>{
    await Siginout();
    navigate("/");
    
  }

  // React.useEffect(() => {
  //   if (logout.error) {
  //     message.error(logout.error);
  //   }
  //   if (logout.success) {
  //     message.success("user successfully logged out ");
  //     navigate("/");
  //   }
  // }, [logout]);

  return (
    <Navbar fixed="top" className="Navigation-bar">
      <Container>
        <Navbar.Brand href="#home">
          <img
          style={{width:'50px',height:'50px'}}
           src="https://cdn.pixabay.com/photo/2021/04/01/09/23/money-bag-6141696_960_720.png" alt="logo"/>
           <h1 className="form-name-title">Loan applicant form</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="applicant-profile-picture">
              <img src={`${ApplicantPic}`} alt="applicant-profile-pic" />
              <label className="applicant-name">Jean De Dieu</label>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const mapStateToProps = ({LogoutReducer})=>{
  const {logout} = {LogoutReducer}
  return {logout} 
}
export default connect(mapStateToProps,{Siginout})(Navigation);
