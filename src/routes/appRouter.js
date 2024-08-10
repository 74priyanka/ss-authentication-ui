import React from "react";
import LandingPage from "../containers/LandingPage";
import LaunchScreen from "../containers/LaunchScreen";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ForgotPage from "../containers/ForgotPage";
import EmailPage from "../containers/EmailPage";
import ResetSuccessPage from "../containers/ResetSuccessPage";
import Error from "./Error";
import AppLayout from "./AppLayout";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../containers/HomeScreen";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/launch",
        element: <LaunchScreen />,
      },
      {
        path: "/login/:userType",
        element: <Login />,
      },
      {
        path: "/signup/:userType",
        element: <Signup />,
      },
      {
        path: "/forgotPage",
        element: <ForgotPage />,
      },
      {
        path: "/emailPage",
        element: <EmailPage />,
      },
      {
        path: "/resetSuccessPage",
        element: <ResetSuccessPage />,
      },
      {
        path: "/homescreen",
        element: <HomeScreen />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
