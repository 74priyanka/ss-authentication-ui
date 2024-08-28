import React from "react";
import LandingPage from "../containers/LandingPage";
import LaunchScreen from "../containers/LaunchScreen";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ForgotPage from "../containers/ForgotPage";
import EmailPage from "../containers/EmailPage";
import ResetSuccessPage from "../containers/ResetSuccessPage";
import ProfilePage from "../containers/ProfilePage";
import Error from "./Error";
import AppLayout from "./AppLayout";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../containers/HomeScreen";
import AboutMe from "../containers/ProfilePage/components/AboutMe";
import WorkExperience from "../containers/ProfilePage/components/WorkExperience";
import Education from "../containers/ProfilePage/components/Education";
import Skill from "../containers/ProfilePage/components/Skill";
import AddLanguages from "../containers/ProfilePage/components/AddLanguages";
import Certifications from "../containers/ProfilePage/components/Certifications";
import IdentityVerify from "../containers/ProfilePage/components/IdentityVerify";
import CreateJobPost from "../containers/JobPosting/CreateJobPost";
import ShowJobPost from "../containers/JobPosting/ShowJobPost";

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
      {
        path: "/profilePage",
        element: <ProfilePage />,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
      {
        path: "/work",
        element: <WorkExperience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/language",
        element: <AddLanguages />,
      },
      {
        path: "/certifications",
        element: <Certifications />,
      },
      {
        path: "/identityVerify",
        element: <IdentityVerify />,
      },
      {
        path: "/createJobPost",
        element: <CreateJobPost />,
      },
      {
        path: "/showJobPost",
        element: <ShowJobPost />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
