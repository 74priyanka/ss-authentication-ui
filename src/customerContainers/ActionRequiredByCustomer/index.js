import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllAcceptedServiceRequests } from "../../api/CustomerApi";

const ActionRequiredByCustomer = () => {
  const location = useLocation();
  const { customerId } = location.state || {}; // Extract customerId from location.state

  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!customerId) return;
    console.log("Customer ID:", customerId);
    const getAcceptedRequests = async () => {
      try {
        const data = await fetchAllAcceptedServiceRequests(customerId);
        console.log("Fetched Data:", data);
        setAcceptedRequests(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getAcceptedRequests();
  }, [customerId]);

  if (!customerId) {
    return <p>Customer ID is missing. Please try again later.</p>;
  }

  const handleConfirm = (worker) => {
    // Redirect to WhatsApp with worker details
    const message = `I would like to confirm the service with ${worker.accepted_by_worker_name}. Please contact me.`;
    const phone = worker.accepted_by_worker_phone_number;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div>
      <h2>Action Required By Customer</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {acceptedRequests.length === 0 ? (
        <p>No accepted requests found.</p>
      ) : (
        acceptedRequests.map((request) => (
          <div key={request._id} className="accepted-request">
            <p>Service Request ID: {request.service_request_id}</p>
            <p>Accepted by: {request.accepted_by_worker_name}</p>
            <p>Worker Id: {request.accepted_by_worker_id}</p>
            <p>Worker Contact: {request.accepted_by_worker_phone_number}</p>
            <p>Skills: {request.accepted_by_worker_skills.join(", ")}</p>
            <p>
              Certifications:{" "}
              {request.accepted_by_worker_certifications.join(", ")}
            </p>
            <button onClick={() => handleConfirm(request)}>Confirm</button>
            <button>Reject</button>{" "}
            {/* Logic to handle rejection can be added */}
          </div>
        ))
      )}
    </div>
  );
};

export default ActionRequiredByCustomer;
