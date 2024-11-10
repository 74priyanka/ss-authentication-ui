import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServiceRequestsCard from "../../../reusableComponents/ServiceRequestsCard";
import { StyledShowServiceRequests } from "../ShowServiceRequests/style";
import { getServiceRequests } from "../../../api/CustomerApi";

const ShowAcceptedServiceRequests = () => {
  const navigate = useNavigate();

  const {
    data: serviceRequests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["serviceRequests"],
    queryFn: getServiceRequests,
  });

  console.log("service requests", serviceRequests?.data);
  // Filter service requests to only include those with status "accepted"
  const acceptedRequests = serviceRequests?.data.filter(
    (service) => service.status === "Accepted"
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading job listings: {error.message}</p>;

  return (
    <StyledShowServiceRequests>
      <h1>Service Requests accepted by worker</h1>
      <div className="service-card-container">
        {acceptedRequests.length > 0 ? (
          acceptedRequests.map((service) => (
            <ServiceRequestsCard
              key={service._id}
              service={service}
              isShowServiceRequest={false}
              className="service-card"
            />
          ))
        ) : (
          <p>No accepted service requests found</p>
        )}
      </div>
    </StyledShowServiceRequests>
  );
};

export default ShowAcceptedServiceRequests;
