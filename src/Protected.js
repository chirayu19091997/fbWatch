import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return this.props.adminstatus ? (
      <Component
        loggedin={this.props.loggedin}
        setLoggedin={this.props.setLoggedin}
        adminstatus={this.props.adminstatus}
        setAdminstatus={this.props.setAdminstatus}
        maintainence={this.props.maintainence}
        setMaintainence={this.props.setMaintainence}
      />
    ) : (
      <>
        {toast.warning("Unauthorised Access Please Login With Admin Id.")}
        <Redirect to={{ pathname: "/login" }} />
      </>
    );
  }
}

export default ProtectedRoute;
