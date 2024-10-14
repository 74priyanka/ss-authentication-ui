import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard";
import { StyledShowJobPost } from "./style";
import { getJobListings } from "../../../api/WorkerApi";

const ShowAllJobPost = () => {
  const navigate = useNavigate();

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

  // Filter the job listings to show only those with status "Pending"
  const pendingJobListings = jobListings?.filter(
    (job) => job.status === "Pending"
  );

  return (
    <StyledShowJobPost>
      <h1>Job Postings By Workers</h1>
      <div className="job-card-container">
        {pendingJobListings.length > 0 ? (
          pendingJobListings.map((job) => (
            <JobCard key={job._id} job={job} isShowJobPosting={false} />
          ))
        ) : (
          <p>No pending job listings found</p>
        )}
      </div>
    </StyledShowJobPost>
  );
};

export default ShowAllJobPost;
