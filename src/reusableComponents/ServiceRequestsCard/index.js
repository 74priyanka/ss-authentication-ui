import React, { useState } from "react";
import { StyledServiceRequestsCard } from "./style"; // Assuming similar to StyledJobCard
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useNavigate } from "react-router-dom";
import { useDeleteServiceRequestsHandler } from "../../containers/ServiceRequests/ShowServiceRequests/hooks/useDeleteServiceRequestsHandler";

const ServiceRequestsCard = ({ service }) => {
  const [showOptions, setShowOptions] = useState();
  const navigate = useNavigate();
  const deleteServiceRequestsMutation = useDeleteServiceRequestsHandler();

  const handleDelete = () => {
    try {
      deleteServiceRequestsMutation.mutate(service._id, {
        onSuccess: () => {
          console.log("Service Request deleted");
        },
        onError: (error) => {
          console.error("Error deleting Service Request:", error);
        },
      });
    } catch (error) {
      console.error("Error deleting Service Request:", error);
    }
  };

  const handleEdit = () => {
    navigate("/editServiceRequests", {
      state: { service },
    });
  };

  return (
    <StyledServiceRequestsCard>
      <div className="service-card-header">
        <h2 className="service-card-title">{service.service_requested}</h2>
        <img
          src={Options}
          alt="Options"
          onClick={() => setShowOptions(!showOptions)}
          aria-label="Options Menu"
        />
        {showOptions && (
          <div className="options-menu">
            <img
              src={editIcon}
              alt="Edit"
              onClick={() => handleEdit(service)}
              aria-label="Edit Service"
            />
            <img
              src={deleteIcon}
              alt="Delete"
              onClick={() => handleDelete(service._id)} //   onClick={handleDelete}
              aria-label="Delete Service"
            />
          </div>
        )}
      </div>
      <p>{service.description || "No description provided"}</p>
      <p>Requested Date: {service.requestedDate || "N/A"}</p>
      <p>Requested Time: {service.requestedTime || "N/A"}</p>
      <p>Location: {service.address || "N/A"}</p>
      <div className="service-card-body">
        <p>Duration: {service.estimatedDuration || "N/A"}</p>
        <p>Price: ${service.price || 0}</p>
        <p>Status: {service.status || "Pending"}</p>
        <p>Posted By: {service.name}</p>
        <p>Contact:{service.contact}</p>
      </div>
    </StyledServiceRequestsCard>
  );
};

export default ServiceRequestsCard;
