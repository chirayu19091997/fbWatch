import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return (this.props.adminstatus) ? (
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
        {alert("Unauthorised Access Please Login With Admin Id.")}
        <Redirect to={{ pathname: "/login" }} />
      </>
    );
  }
}

export default ProtectedRoute;
