import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Menu,
  Input,
  Header as Heading,
  Image,
  Button,
  Modal,
} from "semantic-ui-react";

const Navbar = (props) => {
  let history = useHistory();

  // States For Navigation Active Item
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState("Home");
  const [open, setOpen] = useState(false);
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    if (props.adminstatus) {
      axios
        .get(`http://localhost:5000/admin/${id}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Retreive LocalStorage & Api Data.
  const name = userdata.name;
  const email = userdata.email;
  const phone = userdata.phone;
  const joined = userdata.joined;
  const id = localStorage.getItem("id");

  // Handler To Manage Logout.
  const handleLogout = () => {
    setOpen(false);
    props.setLoggedin(false);
    props.setAdminstatus(false);
    toast.success("Successfully Logged Out.");
  };

  // Handlers For Admin Panel.
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
          {props.searchable ? 
          (
          <Menu.Item>
            <Input
              // transparent
              icon={{ name: "search", link: true }}
              placeholder="Search Movie..."
              className="search-style"
              onChange={props.setSearch}
            />
          </Menu.Item>
          ) : (
            <>
            </>
          )}
        </Menu.Menu>

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
    </>
  );
};

export default Navbar;
