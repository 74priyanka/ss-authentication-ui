import React, { useState } from "react";
import { StyledJobCard } from "./style";
import Options from "../../assets/Options.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import { useDeleteJobPostHandler } from "../../containers/JobPosting/ShowJobPost/hooks/useDeleteJobPostHandler";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const deleteJobMutation = useDeleteJobPostHandler();

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

  return (
    <StyledJobCard className="job-card">
      <div className="job-card-header">
        <h2 className="job-card-title">{job.category}</h2>
        <img
          src={Options}
          alt="Options"
          onClick={() => setShowOptions(!showOptions)}
        />
        {showOptions && (
          <div className="options-menu">
            <img src={editIcon} alt="Edit" onClick={() => handleEdit(job)} />
            <img
              src={deleteIcon}
              alt="Delete"
              onClick={() => handleDelete(job._id)}
            />
          </div>
        )}
      </div>
      <p>{job.job_description}</p>
      <p>Availability Date: {job.date}</p>
      <div className="job-card-body">
        <p> {job.service_availability_duration}</p>
        <p>${job.price}</p>
        <p>{job.status}</p>
      </div>
    </StyledJobCard>
  );
};

export default JobCard;
