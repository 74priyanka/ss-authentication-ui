import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllAcceptedJobPostings,
  confirmByWorker,
} from "../../api/WorkerApi";
import { StyledJobCard } from "../../reusableComponents/JobCard/style";

const ActionRequiredByWorker = () => {
  const location = useLocation();
  const { workerId } = location.state || {};

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

  if (!workerId) {
    return <p>Worker ID is missing. Please try again later.</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading accepted job posts: {error.message}</p>;

  return (
    <div>
      <h2>Action Required By Worker</h2>
      {jobPostsState.length === 0 ? (
        <p>No accepted job postings found.</p>
      ) : (
        jobPostsState.map((jobPost) => (
          <StyledJobCard
            key={jobPost.job_posting_id}
            style={{
              borderColor: jobPost.status === "Confirmed" ? "green" : "initial",
            }}
          >
            <div className="job-card-header">
              <h2 className="job-card-title">{jobPost.job_title}</h2>
            </div>
            <p>Job Post ID: {jobPost.job_posting_id}</p>
            <p>Accepted by: {jobPost.accepted_by_customer_name}</p>
            <p>Customer Id: {jobPost.accepted_by_customer_id}</p>
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
    </div>
  );
};

export default ActionRequiredByWorker;
