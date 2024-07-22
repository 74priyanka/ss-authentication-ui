import React from "react";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import { Button } from "../../remoteComponents";

const WorkerAuthUI = () => {
  return (
    <div>
      <h1>WorkerAuthUI page</h1>
      <React.Suspense fallback="Loading Header...">
        <Button />
      </React.Suspense>
      <Login />
      <Signup />
    </div>
  );
};

export default WorkerAuthUI;
