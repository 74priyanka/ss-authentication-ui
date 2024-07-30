import React from "react";
import { StyledWorkerAuthUI } from "./style";
import { Outlet } from "react-router-dom";

const WorkerAuthUI = () => {
  return (
    <StyledWorkerAuthUI className="styled-worker-auth-ui">
      <Outlet />
    </StyledWorkerAuthUI>
  );
};
export default WorkerAuthUI;
