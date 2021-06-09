import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Icon,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Signup = (props) => {
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  // Set The Login Account Data To Local Storage.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (signup.password === signup.confirmpassword && signup.password !== "") {
      const user = {
        name: signup.name,
        phone: signup.phone,
        email: signup.email,
        joined: Date.now(),
        password: signup.password,
      };
      localStorage.setItem("name", user.name);
      localStorage.setItem("phone", user.phone);
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
      localStorage.setItem("joined", user.joined);
      alert("Signup Success! Please Login to Continue.");
    } else {
      alert("Oops! Something Went Wrong Please Try Again.");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' />  */}
          Signup on fbWatch
        </Header>

        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={signup.name}
              onChange={(e) => {
                setsignup({ ...signup, name: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              placeholder="E-mail address"
              value={signup.email}
              onChange={(e) => {
                setsignup({ ...signup, email: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="phone"
              iconPosition="left"
              placeholder="Phone"
              value={signup.phone}
              onChange={(e) => {
                setsignup({ ...signup, phone: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Enter Password"
              type="password"
              value={signup.password}
              onChange={(e) => {
                setsignup({ ...signup, password: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-Enter Password"
              type="password"
              value={signup.confirmpassword}
              onChange={(e) => {
                setsignup({ ...signup, confirmpassword: e.target.value });
              }}
            />

            <Button color="teal" fluid size="large" onClick={handleSubmit}>
              Signup
            </Button>
          </Segment>
        </Form>

        <Message>
          Already Registered? <Link to="/login">Login</Link>
        </Message>
        
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
