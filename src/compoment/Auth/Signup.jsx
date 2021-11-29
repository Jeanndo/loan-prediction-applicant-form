import React from "react";
import { Form, Input, InputNumber, Button,message } from "antd";
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
import {Signup as signupUser,GoogleLogin} from '../../Redux/actions/AuthAction'

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
    number: "${label} is not a valid number!",
    password: "${label} is not a valid password!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Signup = ({signupUser,signUp,GoogleLogin,google}) => {
  
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log(values);
    await signupUser(values);
    
  };

  const handleGoogle = async ()=>{
    await GoogleLogin()
   }


  React.useEffect(() => {
    if (signUp.error) {
      message.error(signUp.error);
    }
    if (signUp.success) {
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
  }, [signUp,google]);

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
      {/* <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      {/* <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item> */}
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
      {/* <Form.Item
        name={["user", "confirm"]}
        label="Confirm Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item> */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit"
        loading={signUp.loading}
        >
          Sign up
        </Button>
      </Form.Item>
      <hr/>
      <Button type="primary" onClick={handleGoogle}
      loading={google.loading}
      >Google Login</Button>
    </Form>
  );
};

const mapStateToProps = ({siginUpReducer,googleReducer})=>{
  const {signUp} = siginUpReducer;
  const  { google} = googleReducer;
  return {signUp,google};
}

export default connect(mapStateToProps,{signupUser,GoogleLogin})(Signup)
