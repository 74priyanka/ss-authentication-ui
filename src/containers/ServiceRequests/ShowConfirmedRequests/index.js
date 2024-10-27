import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ServiceRequestsCard from "../../../reusableComponents/ServiceRequestsCard";
import { StyledShowServiceRequests } from "../ShowServiceRequests/style";
import { getServiceRequests } from "../../../api/CustomerApi";

const ShowConfirmedRequests = () => {
  const navigate = useNavigate();

  const {
    data: serviceRequests,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["serviceRequests"],
    queryFn: getServiceRequests,
  });

  console.log("confirmed service requests", serviceRequests);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading service requests: {error.message}</p>;

  // Filter service requests to only include those with status "Confirmed"
  const confirmedRequests = serviceRequests?.data.filter(
    (service) => service.status === "Confirmed"
  );

  return (
    <StyledShowServiceRequests className="container">
      <h1>Confirmed Service Requests</h1>
      <div className="service-card-container">
        {confirmedRequests.length > 0 ? (
          confirmedRequests.map((service) => (
            <ServiceRequestsCard
              key={service._id}
              service={service}
              isShowServiceRequest={false}
            />
          ))
        ) : (
          <p>No confirmed service requests found</p>
        )}
      </div>
    </StyledShowServiceRequests>
  );
};

export default ShowConfirmedRequests;
