import React from "react";
import { StyledCustomerHomeScreen } from "./style";
import profilePic from "../../assets/profilePic.png";
import Buttons from "../../reusableComponents/Buttons";
import { colors } from "../../Constants/colors";
import jobHunt from "../../assets/jobHunt.png";
import Add from "../../assets/add.png";
import Home from "../../assets/Home.png";
import Chat from "../../assets/Chat.png";
import { useNavigate } from "react-router-dom";
import ShowAllJobPost from "../../containers/JobPosting/ShowAllJobPosts";

const CustomerHomeScreen = () => {
  const navigate = useNavigate();

  // Retrieve CustomerProfile from sessionStorage
  const customerProfile = JSON.parse(localStorage.getItem("CustomerProfile"));
  // Extract customerId from customerProfile
  const customerId = customerProfile?.customerProfileId;

  const handleActionsRequired = () => {
    if (customerId) {
      navigate("/actionByCustomer", { state: { customerId } }); // Pass customerId using state
    } else {
      console.error("Customer ID not found.");
    }
  };

  const handleJobCard = () => {
    navigate("/showServiceRequests");
  };
  const handleAddJob = () => {
    navigate("/createServiceRequests");
  };

  const handleProfile = () => {
    navigate("/customerProfile");
  };

  const handleConfirmedRequestsByWorker = () => {
    navigate("/showConfirmedRequests");
  };

  const handleAcceptedJobPosting = () => {
    navigate("/showAcceptedJobPosting");
  };

  const handleConfirmedJobPosting = () => {
    navigate("/showConfirmedJobPostingByCustomer");
  };

  return (
    <StyledCustomerHomeScreen className="home-screen">
      <header className="header">
        <h1>Welcome to customer screen</h1>

        <img
          src={profilePic}
          alt=""
          className="profile-pic"
          onClick={handleProfile}
        />
      </header>

      <div className="promotion">
        <p className="discount">"Find services at your doorstep"</p>
        <p className="promotion-description">Services to explore</p>
      </div>
      <h3 className="job-finding-title">Find Your Job</h3>
      <div className="job-cards">
        <div className="job-card-1">
          <img src={jobHunt} alt="" className="job-hunt-image" />
          <p>Remote Job</p>
        </div>
        <div className="job-card-2" onClick={handleJobCard}>
          <p>SERVICE REQUESTS</p>
          <p>POSTED BY ME</p>
        </div>
        <div className="job-card-3" onClick={handleAcceptedJobPosting}>
          Accepted Job Postings
        </div>
        <div className="job-card-3" onClick={handleConfirmedJobPosting}>
          Confirmed Job Postings
        </div>
        <div className="action-button" onClick={handleActionsRequired}>
          <p>Action Required</p>
          <p>Service Requests</p>
        </div>
        <div
          className="confirmed-jobs"
          onClick={handleConfirmedRequestsByWorker}
        >
          Confirmed Service Requests
        </div>
      </div>

      <div className="nav-items-list">
        <img src={Home} alt="" />
        <img src={Add} alt="" onClick={handleAddJob} />
        <img src={Chat} alt="" />
      </div>
      <ShowAllJobPost />
    </StyledCustomerHomeScreen>
  );
};

export default CustomerHomeScreen;
