import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomerProtectedRoute = () => {
  const [authState, setAuthState] = useState({
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const CustomerProfile = localStorage.getItem("CustomerProfile");

        if (!CustomerProfile) {
          setAuthState({ isLoading: false, isAuthenticated: false });
          return;
        }

        // Parse the CustomerProfile to ensure it's valid
        const parsedCustomerProfile = JSON.parse(CustomerProfile);

        // Add any additional validation you need here
        const isValid = parsedCustomerProfile && parsedCustomerProfile.token; // Adjust based on your token structure

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

export default CustomerProtectedRoute;
