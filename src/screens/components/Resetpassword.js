import React, { useState } from "react";
import axios from "axios";
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
import { Link, useHistory } from "react-router-dom";

const Reset = () => {
  let history = useHistory();

  const [reset, setReset] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  let userdata, admindata;

  const handleReset = (event) => {
    event.preventDefault();
    axios
      .all([
        axios.get("http://localhost:5000/users"),
        axios.get("http://localhost:5000/admin"),
      ])
      .then(async (res) => {
        userdata = await res[0].data;
        admindata = await res[1].data;
        verification();
      })
      .catch((err) => console.log(err));
  };

  const verification = async () => {
    for (let i = 0; i < userdata.length; i++) {
      for (let j = 0; j < admindata.length; j++) {
        if (
          reset.email === userdata[i].email &&
          reset.password === reset.confirmpassword &&
          reset.email !== admindata[j].email &&
          userdata[i].status !== "Blacklisted"
        ) {
          localStorage.setItem("id", userdata[i].id);
          resetter(localStorage.getItem("id"));
          history.push("/login");
          break;
        } else if (
          reset.email !== userdata[i].email &&
          reset.password === reset.confirmpassword &&
          reset.email === admindata[j].email
        ) {
          localStorage.setItem("id", admindata[j].id);
          resetter(localStorage.getItem("id"));
          history.push("/login");
          break;
        }
      }
    }
  };

  const resetter = (id) => {
    axios
      .patch(`http://localhost:5000/users/${id}`, { password: reset.password })
      .then((res) => {
        toast.success("Password Reset Success!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Heading as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' />  */}
          Reset Your fbWatch Password
        </Heading>

        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              placeholder="E-mail address"
              value={reset.email}
              onChange={(e) => {
                setReset({ ...reset, email: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Enter New Password"
              type="password"
              value={reset.password}
              onChange={(e) => {
                setReset({ ...reset, password: e.target.value });
              }}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-Enter New Password"
              type="password"
              value={reset.confirmpassword}
              onChange={(e) => {
                setReset({ ...reset, confirmpassword: e.target.value });
              }}
            />

            <Button color="teal" fluid size="large" onClick={handleReset}>
              Reset
            </Button>
          </Segment>
        </Form>

        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
        <Message>
          Already Registered? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Reset;
