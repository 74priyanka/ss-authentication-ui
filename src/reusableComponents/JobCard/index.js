import React, { useState, useRef, useEffect } from "react";
import { StyledJobCard } from "./style";
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useDeleteJobPostHandler } from "../../containers/JobPosting/ShowJobPost/hooks/useDeleteJobPostHandler";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";
import { acceptJobPosting } from "../../api/CustomerApi";
import { STATUS } from "../../Constants/appConstant";

const JobCard = ({ job, isShowJobPosting }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(job.status === "Accepted");
  const navigate = useNavigate();
  const deleteJobMutation = useDeleteJobPostHandler();
  const optionsRef = useRef(null);

  // Retrieve CustomerProfile from sessionStorage
  const customerProfile = JSON.parse(localStorage.getItem("CustomerProfile"));
  // Extract customerId from customerProfile
  const customerId = customerProfile?.customerProfileId;
  const jobListingId = job._id;

  useEffect(() => {
    // Check localStorage for accepted status
    const acceptedJobs = JSON.parse(localStorage.getItem("acceptedJobs")) || {};
    if (acceptedJobs[jobListingId]) {
      setIsAccepted(true); // Set accepted state based on localStorage
    }
  }, [jobListingId]);

  // Function to handle acceptance of job posting
  const handleAcceptAndReject = async (buttonAction) => {
    console.log("Customer ID:", customerId);
    console.log("Job Listing ID:", jobListingId);
    try {
      await acceptJobPosting(customerId, jobListingId, buttonAction);
      console.log("Job Posting accepted successfully");

      // Update localStorage

      if (buttonAction === STATUS.ACCEPTED) {
        const acceptedJobs =
          JSON.parse(localStorage.getItem("acceptedJobs")) || {};
        acceptedJobs[jobListingId] = true; // Mark as accepted
        localStorage.setItem("acceptedJobs", JSON.stringify(acceptedJobs));

        setIsAccepted(true); // Update the accepted state
      }

      if (buttonAction === STATUS.PENDING) {
        const acceptedJobs =
          JSON.parse(localStorage.getItem("acceptedJobs")) || {};
        delete acceptedJobs[jobListingId];
        localStorage.setItem("acceptedJobs", JSON.stringify(acceptedJobs));
      }
    } catch (error) {
      console.error("Error accepting job posting:", error);
    }
  };

  const handleDelete = () => {
    try {
      deleteJobMutation.mutate(job._id, {
        onSuccess: () => {
          console.log("Job deleted successfully");
        },
        onError: (error) => {
          console.error("Error deleting job:", error);
        },
      });
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleEdit = () => {
    navigate("/editJobPost", {
      state: { job },
    });
  };

  // Close options menu when clicking outside
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
    <StyledJobCard
      style={{
        borderColor: isAccepted ? "green" : "initial", // Change border color when accepted
      }}
    >
      <div className="job-card-header">
        <h2 className="job-card-title">{job.category}</h2>
        {isShowJobPosting && (
          <>
            <img
              src={Options}
              alt="Options"
              onClick={() => setShowOptions(!showOptions)}
              className="options"
            />
            {showOptions && (
              <div className="options-menu" ref={optionsRef}>
                <img src={editIcon} alt="Edit" onClick={handleEdit} />
                <img
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() => setShowDeleteModal(true)}
                />
              </div>
            )}
          </>
        )}
      </div>
      <p>{job.job_description}</p>
      <p>Availability Date: {job.date}</p>
      <p>Contact: {job.contact}</p>
      <div className="job-card-body">
        <p>{job.service_availability_duration}</p>
        <p>${job.price}</p>
        <p>Posted By: {job.name}</p>

        <p> {job.status}</p>
      </div>

      {isShowJobPosting ? (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)} // Close modal
          onConfirm={handleDelete} // Confirm deletion
        />
      ) : (
        <div className="accept-reject-actions">
          <button
            className={`action ${isAccepted ? "disabled" : "accept"}`}
            onClick={() => handleAcceptAndReject(STATUS.ACCEPTED)}
            disabled={isAccepted}
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
    </StyledJobCard>
  );
};

export default JobCard;
