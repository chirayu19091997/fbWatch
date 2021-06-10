import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Header as Heading,
  Image,
  Button,
  Modal,
} from "semantic-ui-react";
import "./Header.css";

const Header = (props) => {
  // States For Navigation Active Item
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState("Home");
  const [open, setOpen] = useState(false);

  // Retreive LocalStorage Data
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const joined = localStorage.getItem("joined");

  // Handler To Manage Login.
  const handleLogin = () => {
    setOpen(false);
    props.setLoggedin(false);
  };

  return (
    <>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item name="FB()watch" onClick={handleItemClick} />
        </Link>
        <Link to="/">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/movies">
          <Menu.Item
            name="Movies"
            active={activeItem === "Movies"}
            onClick={handleItemClick}
          />
        </Link>

        <Link to="/tv-shows">
          <Menu.Item
            name="Tv-shows"
            active={activeItem === "Tv-shows"}
            onClick={handleItemClick}
          />
        </Link>

        <Menu.Menu position="right">
          {props.loggedin ? (
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Menu.Item>Hi! {name}</Menu.Item>}
            >
              <Modal.Header>Account Details</Modal.Header>
              <Modal.Content image>
                <Image size="medium" src="./rachel.png" wrapped />
                <Modal.Description>
                  <Heading>Hello: {name}!</Heading>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                  <p>Joined: {joined}</p>
                  <p>Premium: {}</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button
                  content="Logout"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={handleLogin}
                  positive
                />
              </Modal.Actions>
            </Modal>
          ) : (
            <Link to="/login">
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                onClick={handleItemClick}
              />
            </Link>
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
