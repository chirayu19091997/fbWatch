import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./screens/header/Header";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return (this.props.loggedin) ? (
      <div>
        <Header
          loggedin={this.props.loggedin}
          setLoggedin={this.props.setLoggedin}
          adminstatus={this.props.adminstatus}
          setAdminstatus={this.props.setAdminstatus}
        />
        <Component
          loggedin={this.props.loggedin}
          setLoggedin={this.props.setLoggedin}
        />
      </div>
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

export default ProtectedRoute;
