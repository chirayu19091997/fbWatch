import React, { Component } from "react";
import { Redirect } from "react-router";

class PublicRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.loggedin ? (
      <Redirect to={{ pathname: "/" }} />
    ) : (
      <Component
        loggedin={this.props.loggedin}
        setLoggedin={this.props.setLoggedin}
        adminstatus={this.props.adminstatus}
        setAdminstatus={this.props.setAdminstatus}
      />
    );
  }
}

export default PublicRoute;
