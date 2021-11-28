import React from "react";
import { Form, Input,Button } from "antd";
import { useNavigate } from 'react-router-dom';
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

const Signup = () => {

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log(values);
    navigate("/applicant_form");
  };

  // const handleLogin = ()=>{
   
  // }

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
        name={["user", "email"]}
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
        name={["user", "password"]}
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
