import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard";
import { StyledShowJobPost } from "./style";
import { getJobListings } from "../../../api/WorkerApi";

const ShowJobPost = () => {
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
    <StyledShowJobPost className="container">
      {jobListings.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </StyledShowJobPost>
  );
};

export default ShowJobPost;
