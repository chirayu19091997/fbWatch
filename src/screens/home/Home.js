import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Menu,
  Header as Heading,
  Input,
  Image,
  Button,
  Modal,
} from "semantic-ui-react";
import MovieTiles from "./MovieTiles";

const Home = (props) => {
  let history = useHistory();

  //States For NavBar Active Item.
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState("Home");

  // State For Search Input.
  const [search, setSearch] = useState("");

  // State For Account Modal.
  const [open, setOpen] = useState(false);
  const [userdata, setUserData] = useState({});

  // Retreive LocalStorage and Api Data.
  useEffect(() => {
    if (props.adminstatus) {
      axios
        .get(`http://localhost:5000/admin/${id}`)
        .then((response) => {
          setUserData(response.data);
          console.log(userdata);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then((response) => {
          setUserData(response.data);
          console.log(userdata);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const name = userdata.name;
  const email = userdata.email;
  const phone = userdata.phone;
  const joined = userdata.joined;
  const id = localStorage.getItem("id");

  // Handler For Search Input.
  const handleItemChange = (event) => {
    setSearch(event.target.value);
  };

  // Handler For Logout State.
  const handleLogout = () => {
    setOpen(false);
    props.setLoggedin(false);
    props.setAdminstatus(false);
    toast.success("Successfully Logged Out.");
  };

  const handlemanage = () => {
    history.push("/manage");
    setOpen(false);
  };

  const handleblacklist = () => {
    history.push("/blacklist");
    setOpen(false);
  };

  return (
    <>
      {/* NavigationBar UI section */}

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

        {/* Search Bar */}

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

        {/* Login UI Section */}

        <Menu.Menu position="right">
          {props.loggedin ? (
            <>
              {props.adminstatus ? (
                <>
                  <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Menu.Item>Admin Panel</Menu.Item>}
                  >
                    <Modal.Header>Admin Details</Modal.Header>
                    <Modal.Content image>
                      <Image size="medium" src="./rachel.png" wrapped />
                      <Modal.Description>
                        <Heading>Hello: {name}!</Heading>
                        <p>
                          Manage Users:{" "}
                          <Button color="black" onClick={handlemanage}>
                            Manage
                          </Button>
                        </p>
                        <p>
                          Blacklist Users:{" "}
                          <Button color="black" onClick={handleblacklist}>
                            Blacklist
                          </Button>
                        </p>
                        <p>
                          Maintainence Mode:{" "}
                          <Button
                            size="small"
                            color="black"
                            onClick={() =>
                              props.setMaintainence(!props.maintainence)
                            }
                          >
                            {props.maintainence ? "ON" : "OFF"}
                          </Button>
                        </p>
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
                        onClick={handleLogout}
                        positive
                      />
                    </Modal.Actions>
                  </Modal>
                </>
              ) : (
                <>
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
                          We've found the following gravatar image associated
                          with your e-mail address.
                        </p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                        <p>Joined: {joined}</p>
                        <p>Premium: { }</p>
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
                        onClick={handleLogout}
                        positive
                      />
                    </Modal.Actions>
                  </Modal>
                </>
              )}
            </>
          ) : (
            <>
              <Link to="/login">
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  onClick={handleItemClick}
                />
              </Link>
            </>
          )}
        </Menu.Menu>
      </Menu>

      <MovieTiles search={search}></MovieTiles>
    </>
  );
};

export default Home;
