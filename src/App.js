import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigator from "./routes/Navigator";

const App = () => {
  // Setup Toast.
  toast.configure();

  return <Navigator />;
};

export default App;
