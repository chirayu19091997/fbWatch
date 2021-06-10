import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Header, Input, Image, Button, Modal } from "semantic-ui-react";
import "./Home.css";
import MovieTiles from "./MovieTiles";

const Home = (props) => {

  //States For NavBar Active Item.
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState("Home");

  // State For Search Input.
  const [search, setSearch] = useState("");

  // State For Account Modal.
  const [open, setOpen] = useState(false);

  // Retreive LocalStorage Data.
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const joined = localStorage.getItem("joined");

  // Handler For Search Input.
  const handleItemChange = (event) => {
    setSearch(event.target.value);
  };

  // Handler For Login State.
  const handleLogin = () => {
    setOpen(false);
    props.setLoggedin(false);
  };

  return (
    <>
      {
      /* NavigationBar UI section */
      }

      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            name="FB()watch"
            onClick={handleItemClick}
            />
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

        {
        /* Search Bar */
        }

        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              // transparent
              icon={{ name: "search", link: true }}
              placeholder="Search Movie..."
              className="search-style"
              onChange={handleItemChange}
            />
          </Menu.Item>
        </Menu.Menu>

        {
        /* Login UI Section */
        }

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
                  <Header>Hello: {name}!</Header>
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
      
      <MovieTiles search={search}></MovieTiles>
    </>
  );
};

export default Home;
