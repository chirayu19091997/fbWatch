import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header as Heading,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = (props) => {
  let history = useHistory();

  // State For Login.
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  let userdata, admindata;
  // Handler For Retreiving Data And Login.
  const handleClick = (event) => {
    event.preventDefault();

    // Retreive Signup Data From Api.
    axios
      .all([
        axios.get("http://localhost:5000/users"),
        axios.get("http://localhost:5000/admin"),
      ])
      .then(async (res) => {
        userdata = await res[0].data;
        admindata = await res[1].data;
        console.log(userdata, admindata);
        verification();
      })
      .catch((err) => console.log(err));
  };

  const verification = async () => {
    for (let i = 0; i < userdata.length; i++) {
      for (let j = 0; j < admindata.length; j++) {
        if (
          Login.email === userdata[i].email &&
          Login.password === userdata[i].password &&
          Login.email !== admindata[j].email &&
          Login.password !== admindata[j].password &&
          userdata[i].status !== "Blacklisted"
        ) {
          console.log("user");
          props.setLoggedin(true);
          localStorage.setItem("id", userdata[i].id);
          history.push("/");
          break;
        } else if (
          Login.email !== userdata[i].email &&
          Login.password !== userdata[i].password &&
          Login.email === admindata[j].email &&
          Login.password === admindata[j].password
        ) {
          console.log("admin");
          props.setLoggedin(true);
          props.setAdminstatus(true);
          localStorage.setItem("id", admindata[j].id);
          history.push("/");
          break;
        }
      }
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Heading as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' />  */}
          Log-in to your account
        </Heading>

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
