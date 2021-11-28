import React, { useState } from "react";
import { Modal } from "antd";
import Signup from "../Auth/Signup";

const LandingNavigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = () => {
    setIsModalVisible(true);
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

      <div className="landing-page-navigaion">
        <div className="landing-page-nav-left-contents">
          <h1>Loan prediction using machine learning </h1>
        </div>
        <div className="landing-page-nav-right-contents">
          <button className="login-btn">Login</button>
          <button onClick={handleClick} className="signup-btn">
            SIGNUP
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingNavigation;
