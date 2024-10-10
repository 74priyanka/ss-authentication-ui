import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard";
import { StyledShowJobPost } from "./style";
import { getJobListings } from "../../../api/WorkerApi";

const ShowJobPost = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createJobPost");
  };
  const {
    data: jobListings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobListings"],
    queryFn: getJobListings,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading job listings: {error.message}</p>;

  return (
    <StyledShowJobPost>
      <h1>Job Postings</h1>
      <div className="job-card-container">
        {jobListings.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleCreate}>+</button>
      </div>
    </StyledShowJobPost>
  );
};

export default ShowJobPost;
