import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard";
import { StyledShowJobPost } from "./style";
import { getJobListingsByWorker } from "../../../api/WorkerApi";
import Home from "../../../assets/Home.png";

const ShowJobPost = () => {
  const navigate = useNavigate();

  // Get the worker's profileId from sessionStorage (this is the userId)

  const profile = JSON.parse(sessionStorage.getItem("profile"));
  const handleCreate = () => {
    navigate("/createJobPost");
  };
  const handleHome = () => {
    navigate("/homescreen");
  };

  const {
    data: jobListings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobListingsByWorker", profile.profileId], // Include userId as part of the query key
    queryFn: () => getJobListingsByWorker(profile.profileId), // Fetch job posts by this worker
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading job listings: {error.message}</p>;

  return (
    <StyledShowJobPost>
      <div className="show-jobpost-header">
        <h1>Job Postings</h1>
        <img src={Home} alt="" className="homescreen" onClick={handleHome} />
      </div>

      <div className="job-card-container">
        {jobListings.map((job) => (
          <JobCard key={job._id} job={job} isShowJobPosting={true} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleCreate}>+</button>
      </div>
    </StyledShowJobPost>
  );
};

export default ShowJobPost;
