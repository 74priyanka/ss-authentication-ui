import { Navigate, Outlet } from "react-router-dom";

const WorkerProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("profile");

  // Redirect to the launch screen if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/launch" replace />;
  }

  // If authenticated, render the child routes using Outlet
  return <Outlet />;
};

export default WorkerProtectedRoute;
