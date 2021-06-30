import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../screens/common/Navbar";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return this.props.adminstatus ? (
      <>
        <Navbar
          loggedin={this.props.loggedin}
          setLoggedin={this.props.setLoggedin}
          adminstatus={this.props.adminstatus}
          setAdminstatus={this.props.setAdminstatus}
          maintainence={this.props.maintainence}
          setMaintainence={this.props.setMaintainence}
          search={this.props.search}
          setSearch={this.props.setSearch}
          searchable={this.props.searchable}
        />
        <Component
          loggedin={this.props.loggedin}
          setLoggedin={this.props.setLoggedin}
          adminstatus={this.props.adminstatus}
          setAdminstatus={this.props.setAdminstatus}
          maintainence={this.props.maintainence}
          setMaintainence={this.props.setMaintainence}
        />
      </>
    ) : (
      <>
        {toast.warning("Unauthorised Access Please Login With Admin Id.")}
        <Redirect to={{ pathname: "/login" }} />
      </>
    );
  }
}

export default ProtectedRoute;
