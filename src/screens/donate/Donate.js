import React from "react";
import Header from "../header/Header"

function Donate(props) {
  return (
    <div>
      <Header
      loggedin={props.loggedin}
      setLoggedin={props.setLoggedin}
      adminstatus={props.adminstatus}
      setAdminstatus={props.setAdminstatus}
      maintenence={props.maintenence}
      setMaintenence={props.setMaintenence}
      />
      <h1>Support Page</h1>
    </div>
  );
}

export default Donate;
