import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, Image, Header } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        const data = res.data;
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((res) => {
        toast.success("User Removed");
      })
      .catch((err) => console.log(err));
  };

  const handlePremium = (id) => {
    axios
      .patch(`http://localhost:5000/users/${id}`, { status: "Normal" })
      .then((res) => {
        toast.success("User is No Longer Premium!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: "30px 15px 0 15px" }}>
      <Header as="h3" block fluid style={{ textAlign: "center" }}>
        Manage Users Panel
      </Header>
      <Card.Group>
        {users.map((user) => (
          <Card centered>
            <Card.Content>
              <Image floated="right" size="mini" src="./rachel.png" />
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>{user.status}</Card.Meta>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <Card.Description>
                {user.name} is user since <strong>{user.joined}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  onClick={() => handlePremium(user.id)}
                >
                  Suspend Premium
                </Button>
                <Button basic color="red" onClick={() => handleRemove(user.id)}>
                  Remove
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Users;
