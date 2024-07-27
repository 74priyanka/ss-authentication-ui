import React from "react";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";

const WorkerAuthUI = () => {
  return (
    <div>
      <h1>WorkerAuthUI page</h1>

      <Login />
      <Signup />
    </div>
  );
};

export default WorkerAuthUI;
