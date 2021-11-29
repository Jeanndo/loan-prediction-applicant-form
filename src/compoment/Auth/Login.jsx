import React from "react";
import { Form, Input,Button } from "antd";
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {message} from "antd";

import {Login as signIn,GoogleLogin} from "../../Redux/actions/AuthAction";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    password: "${label} is not a valid password!",
  },
};
/* eslint-enable no-template-curly-in-string */

const Signup = ({signIn,login,GoogleLogin,google}) => {

  const navigate = useNavigate()

  const onFinish = async (values) => {
    // console.log(values);
    await signIn(values);
  };
  const handleGoogle = async ()=>{
      await GoogleLogin()
  }

  React.useEffect(() => {
    if (login.error) {
      message.error(login.error);
    }
    if (login.success) {
      message.success("user successfully logged in");
      navigate("/applicant_form");
    }
    if (google.error) {
      message.error(google.error);
    }
    if (google.success) {
      message.success("user successfully logged in");
      navigate("/applicant_form");
    }
  }, [login,google]);

  console.log("logged in user",login.message);
  console.log("googel user",google.message);
  
  return (


    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{
        margin: "50px 0px 0px 200px",
        padding: "30px",
        width: "770px",
        height: "400px",
      }}
    >
      
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
     
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit"
        loading={login.loading}
        >
          Login
        </Button>
      </Form.Item>
      <hr/>
      <Button type="primary"onClick={handleGoogle} 
      loading={google.loading}
      >Google Login</Button>
    </Form>
  );
};
const mapStateToProps = ({loginReducer,googleReducer})=>{
  const {login} = loginReducer;
  const  { google} = googleReducer;
  return {login, google}
}
export default connect(mapStateToProps,{signIn,GoogleLogin})(Signup);
