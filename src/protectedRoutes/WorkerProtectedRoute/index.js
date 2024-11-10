import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const WorkerProtectedRoute = () => {
  const [authState, setAuthState] = useState({
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const profile = localStorage.getItem("profile");

        if (!profile) {
          setAuthState({ isLoading: false, isAuthenticated: false });
          return;
        }

        // Parse the profile to ensure it's valid
        const parsedProfile = JSON.parse(profile);

        // Add any additional validation you need here
        const isValid = parsedProfile && parsedProfile.token; // Adjust based on your token structure

        setAuthState({
          isLoading: false,
          isAuthenticated: isValid,
        });
      } catch (error) {
        console.error("Authentication check failed:", error);
        setAuthState({ isLoading: false, isAuthenticated: false });
      }
    };

    checkAuthentication();
  }, []);

  // Show nothing while checking authentication
  if (authState.isLoading) {
    return null; // Or return a loading spinner component
  }

  // Redirect to launch if not authenticated
  if (!authState.isAuthenticated) {
    // Using state to pass information about the redirect
    return (
      <Navigate
        to="/launch"
        replace
        state={{
          from: window.location.pathname,
          authRequired: true,
        }}
      />
    );
  }

  // If authenticated, render child routes
  return <Outlet />;
};

export default WorkerProtectedRoute;
