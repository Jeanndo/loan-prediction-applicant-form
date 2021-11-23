import React from "react";
import ApplicantPic from "../assets/jadoo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="form-name-title">Loan applicant form</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="applicant-profile-picture">
              <img src={`${ApplicantPic}`} alt="applicant-picture" />
              <label className="applicant-name">Jean De Dieu</label>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <button className="logout-btn">logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
