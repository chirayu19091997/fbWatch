import React, { Component } from "react";
import { Redirect } from "react-router";

class PublicRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.loggedin ? (
      <Component
        loggedin={this.props.loggedin}
        setLoggedin={this.props.setLoggedin}
        adminstatus={this.props.adminstatus}
        setAdminstatus={this.props.setAdminstatus}
        maintenence={this.props.maintenence}
        setMaintenence={this.props.setMaintenence}
      />
    ) : (
      <>
      {alert("You Need To Be Member To Access This Page.")}
      <Redirect to={{ pathname: "/login" }} />
      </>
    );
  }
}

export default PublicRoute;
