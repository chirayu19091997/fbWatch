import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Card, Image, Header as Heading } from "semantic-ui-react";

import { connect } from "react-redux";
import {
  fetchUsers,
  blacklistUser,
  suspendUser,
  removeUser,
} from "../../actions/actions";

const Users = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div style={{ margin: "30px 15px 0 15px" }}>
      <Heading as="h3" block fluid style={{ textAlign: "center" }}>
        Manage Users Panel
      </Heading>
      <Card.Group>
        {props.users.map((user) => (
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
              <div className="ui three buttons">
                <Button
                  basic
                  color="green"
                  onClick={() =>
                    props.suspendUser(user.id, { status: "Normal" })
                  }
                >
                  Suspend Premium
                </Button>
                <Button
                  basic
                  color="blue"
                  onClick={() =>
                    props.blacklistUser(user.id, { status: "Blacklisted" })
                  }
                >
                  Blacklist User
                </Button>
                <Button
                  basic
                  color="red"
                  onClick={() => props.removeUser(user.id)}
                >
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

const mapStateToProps = (state) => ({
  users: state.users.user,
});

export default connect(mapStateToProps, {
  fetchUsers,
  suspendUser,
  blacklistUser,
  removeUser,
})(Users);
