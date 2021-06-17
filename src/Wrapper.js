import React, { Component } from "react";
import Navbar from "./screens/common/Navbar";

class Wrapper extends Component {
  render() {
    const Component = this.props.component;
    return (
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
          notType={this.props.notType}
        />
      </>
    );
  }
}

export default Wrapper;
