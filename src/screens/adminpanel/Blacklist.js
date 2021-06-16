import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, Image, Header } from "semantic-ui-react";

const Blacklist = () => {
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

  const handleBlacklist = (id) => {
    axios
      .patch(`http://localhost:5000/users/${id}`, { status: "Blacklisted" })
      .then((res) => {
        toast.success("User Blacklisted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: "30px 15px 0 15px" }}>
      <Header as="h3" block fluid style={{ textAlign: "center" }}>
        Blacklist Panel
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
                  onClick={() => handleBlacklist(user.id)}
                >
                  Blacklist
                </Button>
                <Button basic color="red">
                  Ban
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Blacklist;
