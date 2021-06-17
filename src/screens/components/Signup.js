import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Grid,
  Icon,
  Header as Heading,
  Message,
  Segment,
} from "semantic-ui-react";

const Signup = (props) => {
  // UseHistory For Redirecting.
  let history = useHistory();

  // State For Signup Data.
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  // Handler to Set The Login Account Data To Local Storage.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (signup.password === signup.confirmpassword && signup.password !== "") {
      axios
        .post("http://localhost:5000/users", {
          name: signup.name,
          phone: signup.phone,
          email: signup.email,
          joined: Date.now(),
          password: signup.password,
          status: "Normal",
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      toast.success("Signup Success! Please Login to Continue.");
      history.push("/login");
    } else {
      toast.error("Oops! Something Went Wrong Please Try Again.");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Heading as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' />  */}
          Signup on fbWatch
        </Heading>

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
