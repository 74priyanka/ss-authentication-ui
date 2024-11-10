import React from "react";
import LandingPage from "../containers/LandingPage";
import LaunchScreen from "../containers/LaunchScreen";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import ForgotPage from "../containers/ForgotPage";
import EmailPage from "../containers/EmailPage";
import ResetSuccessPage from "../containers/ResetSuccessPage";
import WorkerProfile from "../containers/ProfilePage/WorkerProfile";
import CustomerProfile from "../containers/ProfilePage/CustomerProfile";
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
import CreateServiceRequests from "../containers/ServiceRequests/CreateServiceRequests";
import ShowServiceRequests from "../containers/ServiceRequests/ShowServiceRequests";
import ActionRequiredByCustomer from "../customerContainers/ActionRequiredByCustomer";
import ActionRequiredByWorker from "../containers/ActionRequiredByWorker";
import ShowConfirmedRequests from "../containers/ServiceRequests/ShowConfirmedRequests";
import ShowConfirmedJobs from "../containers/JobPosting/ShowConfirmedJobs";

//customer
import CustomerHomeScreen from "../customerContainers/CustomerHomeScreen";
import CustomerLogin from "../customerContainers/CustomerLogin";
import CustomerSignup from "../customerContainers/CustomerSignup";
import WorkerProtectedRoute from "../protectedRoutes/WorkerProtectedRoute";

const workerAppRoute = [
  {
    path: "/login/worker",
    element: <Login />,
  },
  {
    path: "/signup/worker",
    element: <Signup />,
  },
  {
    path: "/homescreen",
    element: <HomeScreen />,
  },
  {
    path: "/workerProfile",
    element: <WorkerProfile />,
  },
  {
    path: "/createJobPost",
    element: <CreateJobPost />,
  },
  {
    path: "/editJobPost",
    element: <CreateJobPost />,
  },
  {
    path: "/showJobPost",
    element: <ShowJobPost />,
  },
  {
    path: "/actionByWorker",
    element: <ActionRequiredByWorker />,
  },
  {
    path: "/showConfirmedJobs",
    element: <ShowConfirmedJobs />,
  },
];

const customerAppRoute = [
  {
    path: "/login/customer",
    element: <CustomerLogin />,
  },
  {
    path: "/signup/customer",
    element: <CustomerSignup />,
  },

  {
    path: "/customer-homescreen",
    element: <CustomerHomeScreen />,
  },

  {
    path: "/customerProfile",
    element: <CustomerProfile />,
  },
  {
    path: "/createServiceRequests",
    element: <CreateServiceRequests />,
  },
  {
    path: "/editServiceRequests",
    element: <CreateServiceRequests />,
  },
  {
    path: "/showServiceRequests",
    element: <ShowServiceRequests />,
  },
  {
    path: "/showConfirmedRequests",
    element: <ShowConfirmedRequests />,
  },

  {
    path: "/actionByCustomer",
    element: <ActionRequiredByCustomer />,
  },
];

const commonAppRoute = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/launch",
    element: <LaunchScreen />,
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
];

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [...commonAppRoute, ...workerAppRoute, ...customerAppRoute],
    errorElement: <Error />,
  },
]);

export default appRouter;
