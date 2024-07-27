import React from "react";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import Logo from "../../containers/Logo";
import SplashScreen from "../../containers/SplashScreen";
import ForgotPassword from "../../containers/ForgotPassword";
import CheckEmail from "../../containers/CheckEmail";
import Successful from "../../containers/Successful";
import { StyledWorkerAuthUI } from "./style";

const WorkerAuthUI = () => {
  return (
    <StyledWorkerAuthUI className="styled-worker-auth-ui">
      <Logo />
      <SplashScreen />

      <Login />
      <Signup />
      <ForgotPassword />
      <CheckEmail />
      <Successful />
    </StyledWorkerAuthUI>
  );
};
export default WorkerAuthUI;
