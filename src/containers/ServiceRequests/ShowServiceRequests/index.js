import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServiceRequestsCard from "../../../reusableComponents/ServiceRequestsCard";
import { StyledShowServiceRequests } from "./style";
import { getServiceRequestsByCustomer } from "../../../api/CustomerApi";
import Home from "../../../assets/Home.png";

const ShowServiceRequests = () => {
  const navigate = useNavigate();
  // Get customerProfileId from localStorage
  const CustomerProfile = JSON.parse(localStorage.getItem("CustomerProfile"));

  const handleCreate = () => {
    navigate("/createServiceRequests");
  };

  const handleHome = () => {
    navigate("/customer-homescreen");
  };

  const {
    data: serviceRequests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["serviceRequestsByCustomer", CustomerProfile.customerProfileId],
    queryFn: () =>
      getServiceRequestsByCustomer(CustomerProfile.customerProfileId),
  });

  console.log("service requests", serviceRequests?.data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading service request: {error.message}</p>;

  return (
    <StyledShowServiceRequests>
      <div className="show-serviceRequest-header">
        <h1>Service Requests</h1>
        <img src={Home} alt="" onClick={handleHome} className="home-screen" />
      </div>

      <div className="service-card-container">
        {serviceRequests?.data.map((service) => (
          <ServiceRequestsCard
            key={service._id}
            service={service}
            isShowServiceRequest={true}
          />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleCreate}>+</button>
      </div>
    </StyledShowServiceRequests>
  );
};

export default ShowServiceRequests;
