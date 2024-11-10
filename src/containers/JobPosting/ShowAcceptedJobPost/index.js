import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard";
import { StyledShowJobPost } from "../ShowJobPost/style";
import { getJobListings } from "../../../api/WorkerApi";

const ShowAcceptedJobPost = () => {
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

  // Filter the job listings to show only those with status "accepted"
  const acceptedJobListings = jobListings?.filter(
    (job) => job.status === "Accepted"
  );

  return (
    <StyledShowJobPost>
      <h1>Job Postings accepted By Customers</h1>
      <div className="job-card-container">
        {acceptedJobListings.length > 0 ? (
          acceptedJobListings.map((job) => (
            <JobCard key={job._id} job={job} isShowJobPosting={false} />
          ))
        ) : (
          <p>No accepted job listings found</p>
        )}
      </div>
    </StyledShowJobPost>
  );
};

export default ShowAcceptedJobPost;
