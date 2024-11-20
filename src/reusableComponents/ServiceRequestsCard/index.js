import React, { useState, useEffect, useRef } from "react";
import { StyledServiceRequestsCard } from "./style";
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";
import { acceptServiceRequest } from "../../api/WorkerApi";
import { useDeleteServiceRequestsHandler } from "../../containers/ServiceRequests/ShowServiceRequests/hooks/useDeleteServiceRequestsHandler";
import { STATUS } from "../../Constants/appConstant";

const ServiceRequestsCard = ({ service, isShowServiceRequest }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false); // Initial state is false
  const optionsRef = useRef(null);

  const workerProfile = JSON.parse(localStorage.getItem("profile"));
  const workerId = workerProfile?.profileId;
  const serviceRequestId = service._id;
  const navigate = useNavigate();
  const deleteServiceRequestsMutation = useDeleteServiceRequestsHandler();

  useEffect(() => {
    // Check localStorage for accepted status
    const acceptedServices =
      JSON.parse(localStorage.getItem("acceptedServices")) || {};
    if (acceptedServices[serviceRequestId]) {
      setIsAccepted(true); // Set accepted state based on localStorage
    }
  }, [serviceRequestId]);

  // Function to handle acceptance of service request
  const handleAcceptAndReject = async (buttonAction) => {
    console.log("Worker ID:", workerId);
    console.log("Service Request ID:", serviceRequestId);
    try {
      // Call the acceptServiceRequest function with the necessary parameters
      await acceptServiceRequest(workerId, serviceRequestId, buttonAction);
      console.log("Service request accepted successfully");

      if (buttonAction === STATUS.ACCEPTED) {
        const acceptedServices =
          JSON.parse(localStorage.getItem("acceptedServices")) || {};
        acceptedServices[serviceRequestId] = true; // Mark as accepted

        localStorage.setItem(
          "acceptedServices",
          JSON.stringify(acceptedServices)
        );
        setIsAccepted(true); // Update the accepted state
      }

      if (buttonAction === STATUS.PENDING) {
        const acceptedServices =
          JSON.parse(localStorage.getItem("acceptedServices")) || {};
        delete acceptedServices[serviceRequestId];
        localStorage.setItem(
          "acceptedServices",
          JSON.stringify(acceptedServices)
        );
      }
    } catch (error) {
      console.error("Error accepting service request:", error);
    }
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  return (
    <StyledServiceRequestsCard
      style={{
        borderColor: isAccepted ? "green" : "initial", // Change border color when accepted
      }}
    >
      <div className="service-card-header">
        <h2 className="service-card-title">{service.service_requested}</h2>
        {isShowServiceRequest && (
          <>
            <img
              src={Options}
              alt="Options"
              onClick={() => setShowOptions(!showOptions)}
              aria-label="Options Menu"
              className="options"
            />
            {showOptions && (
              <div className="options-menu" ref={optionsRef}>
                <img
                  src={editIcon}
                  alt="Edit"
                  onClick={handleEdit}
                  aria-label="Edit Service"
                />
                <img
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() => setShowDeleteModal(true)}
                  aria-label="Delete Service"
                />
              </div>
            )}
          </>
        )}
      </div>
      <p>{service.description || "No description provided"}</p>
      <p>Requested Date: {service.requestedDate || "N/A"}</p>
      <p>Requested Time: {service.requestedTime || "N/A"}</p>
      <p>Location: {service.address || "N/A"}</p>
      <div className="service-card-body">
        <p>Duration: {service.estimatedDuration || "N/A"}</p>
        <p>Rs.{service.price || 0}</p>
        <p>Posted By: {service.name}</p>
        <p>Contact: {service.contact}</p>
        <p>Service request status: {service.status}</p>
      </div>

      {isShowServiceRequest ? (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      ) : (
        <div className="accept-reject-actions">
          <button
            className={`action ${isAccepted ? "disabled" : "accept"}`}
            onClick={() => handleAcceptAndReject(STATUS.ACCEPTED)}
            disabled={isAccepted} // Prevent accepting again
          >
            ACCEPT
          </button>
          <button
            className="reject action"
            onClick={() => handleAcceptAndReject(STATUS.PENDING)}
          >
            REJECT
          </button>
        </div>
      )}
    </StyledServiceRequestsCard>
  );
};

export default ServiceRequestsCard;
