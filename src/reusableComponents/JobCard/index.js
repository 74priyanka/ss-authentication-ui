import React from "react";
import { StyledJobCard } from "./style";
import Options from "../../assets/Options.png";

const JobCard = ({ job }) => {
  return (
    <StyledJobCard className="job-card">
      <div className="job-card-header">
        <h2 className="job-card-title">{job.category}</h2>
        <img src={Options} alt="Options" />
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
