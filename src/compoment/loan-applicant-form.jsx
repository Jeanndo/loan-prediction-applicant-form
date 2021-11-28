import React from "react";
import Navigation from "./Navigation";
import { Row, Col } from "antd";
import { Modal, Spin, Space } from "antd";

const ApplicantForm = () => {
  const [sex, setSex] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [employed, setEmployed] = React.useState("");
  const [credit, setCredit] = React.useState(0);
  const [property, setProperty] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  const handleEducation = (event) => {
    setEducation(event.target.value);
  };
  const handleEmployement = (event) => {
    setEmployed(event.target.value);
  };
  const handleCredit = (event) => {
    setCredit(event.target.value);
  };
  const handlePropeerty = (event) => {
    setProperty(event.target.value);
  };

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsModalVisible(true);
  };

  return (
    <>
      <div className="loan_application_form_container">
        <div className="Top-navigation">
          <Navigation />
          <div className="analysis-design">&nbsp;</div>
        </div>
        <div className="bottom-part">
          {isModalVisible ? (
            <Spin
              size="large"
              tip="Checking Please wiat for our system ..."
              style={{ marginLeft: "500px" }}
              className="spinner"
            />
          ) : (
            <div className="Form-fields-container">
              <h1 className="form-header">Applicant Details</h1>
              <form onSubmit={handleSubmit}>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={12}>
                    <label for="fname">
                      <strong>First Name</strong>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="first-name"
                      id="fname"
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <label for="lname">
                      <strong>Last Name</strong>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      placeholder="Last Name"
                      required
                      className="last-name"
                    />
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={12}>
                    <label for="date">
                      <strong>Date of Birth</strong>
                    </label>
                    <br />
                    <input type="date" id="date" required />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <label>
                      <strong>Gender</strong>
                    </label>
                    <br />
                    <select onChange={handleChange}>
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={12}>
                    <label for="email">
                      <strong>Email</strong>
                    </label>
                    <br />
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="Email"
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <label for="phone">
                      <strong>Phone</strong>
                    </label>
                    <br />
                    <input
                      type="text"
                      required
                      id="phone"
                      placeholder="Phone"
                    />
                    <br />
                    <br />
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={24}>
                    <label>
                      <strong> Martal Status</strong>
                    </label>
                    <input
                      type="radio"
                      name="format"
                      id="single"
                      value="single"
                      checked
                    />
                    &nbsp; &nbsp;
                    <span>Single</span>
                    &nbsp; &nbsp;
                    <input
                      type="radio"
                      name="format"
                      id="married"
                      value="married"
                    />
                    &nbsp; &nbsp;
                    <span>Married</span>
                    &nbsp; &nbsp;
                    <input
                      type="radio"
                      name="format"
                      id="other"
                      value="other"
                    />
                    &nbsp; &nbsp;
                    <span>Other</span>
                    <br />
                    <br />
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={8}>
                    <label for="dependence">
                      <strong>Dependences</strong>
                    </label>
                    <br />
                    <input
                      type="number"
                      required
                      id="dependence"
                      placeholder="Dependences"
                    />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label>
                      {" "}
                      <strong>Education</strong>
                    </label>
                    <br />
                    <select onChange={handleEducation}>
                      <option>Select</option>
                      <option>Graduate</option>
                      <option>Not Graduate</option>
                    </select>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label>
                      <strong>Self Employed</strong>
                    </label>
                    <br />
                    <select onChange={handleEmployement}>
                      <option>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={8}>
                    <label for="income">
                      <strong> Applicant Income</strong>
                    </label>
                    <br />
                    <input
                      type="number"
                      id="income"
                      required
                      placeholder="Applicant Income"
                    />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label for="Coapplicant">
                      {" "}
                      <strong>Coapplicant Income</strong>
                    </label>
                    <br />
                    <input
                      type="number"
                      required
                      id="Coapplicant"
                      placeholder="Coapplicant Income"
                    />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label for="loan-amount">
                      <strong>Loan Amount</strong>
                    </label>
                    <br />
                    <input
                      type="number"
                      required
                      id="loan-amount"
                      placeholder="Loan Amount"
                    />
                  </Col>
                </Row>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "20px" }}
                >
                  <Col className="gutter-row" span={8}>
                    <label for="loan-amount-term">
                      <strong>Loan Amount Term</strong>
                    </label>
                    <br />
                    <input
                      type="number"
                      id="loan-amount-term"
                      placeholder="Loan Amount Term"
                      required
                    />
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label>
                      <strong>Credit History</strong>
                    </label>
                    <br />
                    <select onChange={handleCredit}>
                      <option>Select</option>
                      <option>0</option>
                      <option>1</option>
                    </select>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <label>
                      <strong>Property Location</strong>
                    </label>
                    <br />
                    <select onChange={handlePropeerty}>
                      <option>Select</option>
                      <option>Urban</option>
                      <option>Middle urban</option>
                      <option>Rural</option>
                    </select>
                  </Col>
                </Row>

                <div>
                  <button className="submit-btn" type="submit">
                    Predict
                  </button>
                  <button className="cancel-btn" type="reset">
                    Cancel
                  </button>
                </div>
              </form>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#96d1f8"
                  fill-opacity="1"
                  d="M0,32L34.3,64C68.6,96,137,160,206,181.3C274.3,203,343,181,411,160C480,139,549,117,617,96C685.7,75,754,53,823,53.3C891.4,53,960,75,1029,112C1097.1,149,1166,203,1234,229.3C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicantForm;
