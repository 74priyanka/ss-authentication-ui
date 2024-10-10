import React, { useState, useRef, useEffect } from "react";
import { StyledJobCard } from "./style";
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useDeleteJobPostHandler } from "../../containers/JobPosting/ShowJobPost/hooks/useDeleteJobPostHandler";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";

const JobCard = ({ job }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const deleteJobMutation = useDeleteJobPostHandler();
  const optionsRef = useRef(null);

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
    <StyledJobCard className="job-card">
      <div className="job-card-header">
        <h2 className="job-card-title">{job.category}</h2>
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
      </div>
      <p>{job.job_description}</p>
      <p>Availability Date: {job.date}</p>
      <div className="job-card-body">
        <p>{job.service_availability_duration}</p>
        <p>${job.price}</p>
        <p>{job.status}</p>
      </div>
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)} // Close modal
        onConfirm={handleDelete} // Confirm deletion
      />
    </StyledJobCard>
  );
};

export default JobCard;
