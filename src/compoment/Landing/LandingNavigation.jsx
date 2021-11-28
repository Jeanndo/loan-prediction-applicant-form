import React, { useState } from "react";
import { Modal } from "antd";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";

const LandingNavigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const handleClick1 = () => {
    setIsModalVisible1(true);
  };

  return (
    <>
      <Modal
        title="Create Account"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Signup />
      </Modal>

      <Modal
        title="Login"
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        width={1000}
        footer={null}
      >
        <Login />
      </Modal>

      <div className="landing-page-navigaion">
        <div className="landing-page-nav-left-contents">
          <h1>Loan prediction using machine learning </h1>
        </div>
        <div className="landing-page-nav-right-contents">
          <button onClick={handleClick1} className="login-btn">
            Login
          </button>
          <button onClick={handleClick} className="signup-btn">
            SIGNUP
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingNavigation;
