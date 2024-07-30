import React from "react";
import LandingPage from "../containers/LandingPage";
import LaunchScreen from "../containers/LaunchScreen";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ForgotPage from "../containers/ForgotPage";
import EmailPage from "../containers/EmailPage";
import ResetSuccessPage from "../containers/ResetSuccessPage";

const Paths = [
  {
    path: "/",
    element: <LandingPage />,
    title: "LandingPage",
  },
  {
    path: "/launch",
    element: <LaunchScreen />,
    title: "LaunchScreen",
  },
  {
    path: "/login",
    element: <Login />,
    title: "Login",
  },
  {
    path: "/signup",
    element: <Signup />,
    title: "Signup",
  },
  {
    path: "/forgotPage",
    element: <ForgotPage />,
    title: "ForgotPage",
  },
  {
    path: "/emailPage",
    element: <EmailPage />,
    title: "EmailPage",
  },
  {
    path: "/resetSuccessPage",
    element: <ResetSuccessPage />,
    title: "ResetSuccessPage",
  },
];

export default Paths;
