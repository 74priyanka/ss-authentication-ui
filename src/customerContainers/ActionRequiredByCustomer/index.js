import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllAcceptedServiceRequests,
  confirmByCustomer,
} from "../../api/CustomerApi";
import { StyledServiceRequestsCard } from "../../reusableComponents/ServiceRequestsCard/style";
import { StyledActionRequiredByCustomer } from "./style";
import Home from "../../assets/Home.png";

const ActionRequiredByCustomer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerId } = location.state || {};
  const [requestsState, setRequestsState] = useState([]);

  console.log("Customer ID:", customerId); // Log customerId for debugging

  const handleHome = () => {
    navigate("/customer-homescreen");
  };

  const {
    data: acceptedRequests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["acceptedRequests", customerId],
    queryFn: () => fetchAllAcceptedServiceRequests(customerId),
    enabled: !!customerId,
    refetchInterval: 5000,
  });

  console.log("accepted requests", acceptedRequests);
  // Update requests state based on fetched data
  useEffect(() => {
    if (acceptedRequests.length > 0) {
      setRequestsState(acceptedRequests);
    } else {
      setRequestsState([]);
    }
  }, [acceptedRequests]);

  const handleConfirm = async (request) => {
    try {
      await confirmByCustomer(request.service_request_id);
      await refetch(); // Ensure the data is refetched after confirmation
    } catch (error) {
      console.error("Error confirming request:", error.message);
    }
  };

  return (
    <StyledActionRequiredByCustomer>
      <div className="action-by-customer-header">
        <h1>Action Required by Customer</h1>
        <img src={Home} alt="" onClick={handleHome} className="home-screen" />
      </div>
      <div className="action-by-customer-body">
        {requestsState.length === 0 ? (
          <p>No requests available for confirmation or rejection.</p>
        ) : (
          requestsState.map((request) => (
            <StyledServiceRequestsCard
              key={request.service_request_id}
              style={{
                borderColor:
                  request.status === "Confirmed" ? "green" : "initial",
              }}
              className="action-container"
            >
              <div className="service-card-header">
                <h2 className="service-card-title">
                  {request.service_requested}
                </h2>
              </div>
              {/* <p>Service Request ID: {request.service_request_id}</p> */}
              <p>Service Requested: {request.service_request_name}</p>
              <p>Accepted by: {request.accepted_by_worker_name}</p>
              {/* <p>Worker Id: {request.accepted_by_worker_id}</p> */}
              <p>Worker Contact: {request.accepted_by_worker_phone_number}</p>
              <p>
                Skills:{" "}
                {request.accepted_by_worker_skills &&
                request.accepted_by_worker_skills.length > 0
                  ? request.accepted_by_worker_skills.join(", ")
                  : "No skills provided"}
              </p>

              <div className="accept-reject-actions">
                <button
                  className={`confirm action ${
                    request.status === "Confirmed" ? "disabled" : ""
                  }`}
                  onClick={() => handleConfirm(request)}
                  disabled={request.status === "Confirmed"}
                >
                  {request.status === "Confirmed" ? "Confirmed" : "Confirm"}
                </button>
                <button className="reject action">Reject</button>
              </div>
            </StyledServiceRequestsCard>
          ))
        )}
      </div>
    </StyledActionRequiredByCustomer>
  );
};

export default ActionRequiredByCustomer;
