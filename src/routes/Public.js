import React, { Component } from "react";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../screens/common/Navbar";

class PublicRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.loggedin ? (
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
          search={this.props.search}
          setSearch={this.props.setSearch}
          searchable={this.props.searchable}
          notType={this.props.notType}
        />
      </>
    ) : (
      <>
        {toast.info("You Need To Be Member To Access This Page.")}
        <Redirect to={{ pathname: "/login" }} />
      </>
    );
  }
}

export default PublicRoute;
