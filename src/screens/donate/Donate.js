import React from "react";
import Header from "../header/Header";

const Donate = (props) => {
  return (
    <>
      <Header
        loggedin={props.loggedin}
        setLoggedin={props.setLoggedin}
        adminstatus={props.adminstatus}
        setAdminstatus={props.setAdminstatus}
        maintainence={props.maintainence}
        setMaintainence={props.setMaintainence}
      />
      <h1>Support Page</h1>
    </>
  );
};

export default Donate;
