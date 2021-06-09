import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = (props) => {
  let history = useHistory();
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleClick = (event) => {
    event.preventDefault();

    // Retreive Signup Data From Local Storage
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (Login.email === email && Login.password === password) {
      props.setLoggedin(true);
      alert("Logged In Sucessfully.");
      history.push("/");
    } else {
      alert(
        "Oops! Something Went Wrong, Please Check Your Data and Try Again."
      );
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' />  */}
          Log-in to your account
        </Header>

        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              value={Login.email}
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => {
                setLogin({ ...Login, email: e.target.value });
              }}
            />

            <Form.Input
              fluid
              value={Login.password}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setLogin({ ...Login, password: e.target.value });
              }}
            />

            <Button color="teal" fluid size="large" onClick={handleClick}>
              Login
            </Button>
            
          </Segment>
        </Form>

        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>

      </Grid.Column>
    </Grid>
  );
};

export default Login;
