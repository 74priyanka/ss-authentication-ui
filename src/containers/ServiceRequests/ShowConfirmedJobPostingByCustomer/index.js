import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../../../reusableComponents/JobCard"; // Import the JobCard component for displaying job details
import { StyledShowJobPost } from "./style"; // Import the styled component for layout and styling
import { getJobListings } from "../../../api/WorkerApi"; // Import the API function to fetch job listings
import Home from "../../../assets/Home.png";

const ShowConfirmedJobPostingByCustomer = () => {
  const navigate = useNavigate(); // Initialize the navigate function for navigation purposes

  const handleHome = () => {
    navigate("/homescreen");
  };

  // Fetch job listings using react-query
  const {
    data: jobListings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobListings"], // Unique key for the query
    queryFn: getJobListings, // Function to fetch job listings from the API
  });

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;
  // Handle error state
  if (error) return <p>Error loading job listings: {error.message}</p>;

  // Filter job listings to show only those with status "Confirmed"
  const confirmedJobs = jobListings?.filter(
    (job) => job.status === "Confirmed"
  );

  return (
    <StyledShowJobPost>
      <div className="show-jobpost-header">
        <h1>Confirmed Job Postings</h1>
        <img src={Home} alt="" onClick={handleHome} className="homescreen" />
      </div>

      <div className="job-card-container">
        {confirmedJobs.length > 0 ? (
          confirmedJobs.map((job) => (
            <JobCard key={job._id} job={job} isShowJobPosting={false} />
          ))
        ) : (
          <p>No confirmed job postings found</p>
        )}
      </div>
    </StyledShowJobPost>
  );
};

export default ShowConfirmedJobPostingByCustomer;
