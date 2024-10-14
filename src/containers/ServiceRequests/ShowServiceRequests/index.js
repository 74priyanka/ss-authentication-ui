import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServiceRequestsCard from "../../../reusableComponents/ServiceRequestsCard";
import { StyledShowServiceRequests } from "./style";
import { getServiceRequestsByCustomer } from "../../../api/CustomerApi";
import profilePic from "../../../assets/profilePic.png";

const ShowServiceRequests = () => {
  const navigate = useNavigate();
  // Get customerProfileId from sessionStorage
  const CustomerProfile = JSON.parse(sessionStorage.getItem("CustomerProfile"));

  const handleCreate = () => {
    navigate("/createServiceRequests");
  };

  const handleProfile = () => {
    navigate("/customerProfile");
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
  if (error) return <p>Error loading job listings: {error.message}</p>;

  return (
    <StyledShowServiceRequests>
      <div className="show-serviceRequest-header">
        <h1>Service Requests</h1>
        <img
          src={profilePic}
          alt=""
          className="profile-pic"
          onClick={handleProfile}
        />
      </div>
      <h1>Service Requests</h1>
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
