import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllAcceptedJobPostings,
  confirmByWorker,
} from "../../api/WorkerApi";
import { StyledJobCard } from "../../reusableComponents/JobCard/style";
import { StyledActionRequiredByWorker } from "./style";
import Home from "../../assets/Home.png";

const ActionRequiredByWorker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { workerId } = location.state || {};

  const handleHome = () => {
    navigate("/homescreen");
  };

  const [jobPostsState, setJobPostsState] = useState([]);

  const {
    data: acceptedJobPosts = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["acceptedJobPosts", workerId],
    queryFn: () => fetchAllAcceptedJobPostings(workerId),
    enabled: !!workerId,
    refetchInterval: 5000,
  });

  // Update job posts state when acceptedJobPosts changes
  useEffect(() => {
    if (acceptedJobPosts.length > 0) {
      setJobPostsState(acceptedJobPosts);
    } else {
      setJobPostsState([]);
    }
  }, [acceptedJobPosts]);

  const handleConfirm = async (jobPost) => {
    try {
      await confirmByWorker(jobPost.job_posting_id);
      await refetch(); // Ensure the data is refetched after confirmation
    } catch (error) {
      console.error("Error confirming job post:", error.message);
    }
  };

  return (
    <StyledActionRequiredByWorker>
      <div className="action-by-worker-header">
        <h1>Action Required by Worker</h1>
        <img src={Home} alt="" onClick={handleHome} className="homescreen" />
      </div>
      {jobPostsState.length === 0 ? (
        <p>No accepted job postings found.</p>
      ) : (
        jobPostsState.map((jobPost) => (
          <StyledJobCard
            key={jobPost.job_posting_id}
            style={{
              borderColor: jobPost.status === "Confirmed" ? "green" : "initial",
            }}
            className="action-container"
          >
            {/* <p>Job Post ID: {jobPost.job_posting_id}</p> */}
            <p>Job Title: {jobPost.job_posting_category}</p>
            <p>Accepted by: {jobPost.accepted_by_customer_name}</p>
            {/* <p>Customer Id: {jobPost.accepted_by_customer_id}</p> */}
            <p>Customer Contact: {jobPost.accepted_by_customer_phone_number}</p>

            <div className="accept-reject-actions">
              <button
                className={`confirm action ${
                  jobPost.status === "Confirmed" ? "disabled" : ""
                }`}
                onClick={() => handleConfirm(jobPost)}
                disabled={jobPost.status === "Confirmed"}
              >
                {jobPost.status === "Confirmed" ? "Confirmed" : "Confirm"}
              </button>
              <button className="reject action">Reject</button>
            </div>
          </StyledJobCard>
        ))
      )}
    </StyledActionRequiredByWorker>
  );
};

export default ActionRequiredByWorker;
