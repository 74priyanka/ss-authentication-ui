import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllAcceptedServiceRequests,
  confirmByCustomer,
} from "../../api/CustomerApi";
import { StyledServiceRequestsCard } from "../../reusableComponents/ServiceRequestsCard/style";

const ActionRequiredByCustomer = () => {
  const location = useLocation();
  const { customerId } = location.state || {};
  const [requestsState, setRequestsState] = useState([]);

  console.log("Customer ID:", customerId); // Log customerId for debugging

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
  if (acceptedRequests.length === 0) {
    return <div>No requests found</div>;
  }

  if (!customerId) {
    return <p>Customer ID is missing. Please try again later.</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading accepted requests: {error.message}</p>;

  return (
    <div>
      <h2>Action Required By Customer</h2>
      {requestsState.length === 0 ? (
        <p>No requests available for confirmation or rejection.</p>
      ) : (
        requestsState.map((request) => (
          <StyledServiceRequestsCard
            key={request.service_request_id}
            style={{
              borderColor: request.status === "Confirmed" ? "green" : "initial",
            }}
          >
            <div className="service-card-header">
              <h2 className="service-card-title">
                {request.service_requested}
              </h2>
            </div>
            <p>Service Request ID: {request.service_request_id}</p>
            <p>Accepted by: {request.accepted_by_worker_name}</p>
            <p>Worker Id: {request.accepted_by_worker_id}</p>
            <p>Worker Contact: {request.accepted_by_worker_phone_number}</p>
            <p>Skills: {request.accepted_by_worker_skills.join(", ")}</p>
            <p>
              Certifications:{" "}
              {request.accepted_by_worker_certifications.join(", ")}
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
  );
};

export default ActionRequiredByCustomer;
