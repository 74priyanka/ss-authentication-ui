import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServiceRequestsCard from "../../../reusableComponents/ServiceRequestsCard";
import { StyledShowServiceRequests } from "./style";
import { getServiceRequests } from "../../../api/CustomerApi";

const ShowServiceRequests = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createServiceRequests");
  };
  const {
    data: serviceRequests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["serviceRequests"],
    queryFn: getServiceRequests,
  });
  console.log("service requests", serviceRequests?.data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading job listings: {error.message}</p>;
  if (!Array.isArray(serviceRequests?.data)) {
    return <p>No service requests found</p>;
  }

  return (
    <StyledShowServiceRequests className="container">
      <h1>Service Requests</h1>
      <div className="service-card-container">
        {serviceRequests?.data.map((service) => (
          <ServiceRequestsCard key={service._id} service={service} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleCreate}>+</button>
      </div>
    </StyledShowServiceRequests>
  );
};

export default ShowServiceRequests;
