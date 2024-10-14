import React, { useState, useRef, useEffect } from "react";
import { StyledJobCard } from "./style";
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useDeleteJobPostHandler } from "../../containers/JobPosting/ShowJobPost/hooks/useDeleteJobPostHandler";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";
import { acceptJobPosting } from "../../api/CustomerApi";

const JobCard = ({ job, isShowJobPosting, customerId, jobListingId }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(job.status === "Accepted");
  const navigate = useNavigate();
  const deleteJobMutation = useDeleteJobPostHandler();
  const optionsRef = useRef(null);

  //function to handle acceptance of Job Posting
  const handleAccept = async () => {
    console.log("customer id:", customerId);
    console.log("job listing id:", jobListingId);
    try {
      // Call the acceptJobPosting function with the necessary parameters
      await acceptJobPosting(customerId, jobListingId);
      console.log("Job Posting accepted successfully");
      setIsAccepted(true);
    } catch (error) {
      console.error("Error accepting Job Posting:", error);
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

        <p> {isAccepted ? "Accepted" : job.status || "Pending"}</p>
      </div>

      {isShowJobPosting ? (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)} // Close modal
          onConfirm={handleDelete} // Confirm deletion
        />
      ) : (
        <div className={`accept action ${isAccepted ? "disabled" : ""}`}>
          <button
            className="accept action"
            onClick={handleAccept}
            disabled={isAccepted}
          >
            ACCEPT
          </button>
          <button className="reject action">REJECT</button>
        </div>
      )}
    </StyledJobCard>
  );
};

export default JobCard;
