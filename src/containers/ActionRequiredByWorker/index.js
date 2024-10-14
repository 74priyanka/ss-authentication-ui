import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllAcceptedJobPostings } from "../../api/WorkerApi";

const ActionRequiredByWorker = () => {
  const location = useLocation();
  const { workerId } = location.state || {}; // Extract workerId from location.state

  const [acceptedJobPosts, setAcceptedJobPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!workerId) return;
    console.log("Worker ID:", workerId);
    const getAcceptedJobPosts = async () => {
      try {
        const data = await fetchAllAcceptedJobPostings(workerId);
        console.log("Fetched Data:", data);
        setAcceptedJobPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getAcceptedJobPosts();
  }, [workerId]);

  if (!workerId) {
    return <p>Worker ID is missing. Please try again later.</p>;
  }

  const handleConfirm = (worker) => {
    // Redirect to WhatsApp with worker details
    const message = `I would like to confirm the service with ${worker.accepted_by_worker_name}. Please contact me.`;
    const phone = worker.accepted_by_worker_phone_number;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div>
      <h2>Action Required By Worker</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {acceptedJobPosts.length === 0 ? (
        <p>No accepted job postings found.</p>
      ) : (
        acceptedJobPosts.map((request) => (
          <div key={request._id} className="accepted-job-post">
            <p>Job Post ID: {request.job_posting_id}</p>
            <p>Accepted by: {request.accepted_by_customer_name}</p>
            <p>Customer Id: {request.accepted_by_customer_id}</p>
            <p>Customer Contact: {request.accepted_by_customer_phone_number}</p>
            <button onClick={() => handleConfirm(request)}>Confirm</button>
            <button>Reject</button>{" "}
            {/* Logic to handle rejection can be added */}
          </div>
        ))
      )}
    </div>
  );
};

export default ActionRequiredByWorker;
