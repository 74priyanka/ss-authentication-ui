import React from "react";
import { StyledHomeScreen } from "./style";
import profilePic from "../../assets/profilePic.png";
import Buttons from "../../reusableComponents/Buttons";
import { colors } from "../../Constants/colors";
import jobHunt from "../../assets/jobHunt.png";
// import add from "../../assets/add.png";
import Home from "../../assets/Home.png";
import Chat from "../../assets/Chat.png";
import { useNavigate } from "react-router-dom";
import ShowAllServiceRequests from "../ServiceRequests/ShowAllServiceRequests";

const HomeScreen = () => {
  const navigate = useNavigate();

  // Retrieve workerProfile from sessionStorage
  const workerProfile = JSON.parse(localStorage.getItem("profile"));
  // Extract customerId from customerProfile
  const workerId = workerProfile?.profileId;

  const handleActionsRequired = () => {
    if (workerId) {
      navigate("/actionByWorker", { state: { workerId } }); // Pass workerId using state
    } else {
      console.error("worker ID not found.");
    }
  };

  // const handleAddJob = () => {
  //   navigate("/createJobPost");
  // };

  const handleJobs = () => {
    navigate("/showJobPost");
  };

  const handleProfile = () => {
    navigate("/workerProfile");
  };

  const handleHome = () => {
    navigate("/homescreen");
  };

  const handleConfirmedJobByWorker = () => {
    navigate("/showConfirmedJobs");
  };

  const handleAcceptedServiceRequests = () => {
    navigate("/showAcceptedServiceRequests");
  };

  const handleConfirmedServiceRequests = () => {
    navigate("/showConfirmedRequestsByWorker");
  };

  return (
    <StyledHomeScreen className="home-screen">
      <header className="header">
        <h1 className="title">Welcome to worker screen</h1>
        <img
          src={profilePic}
          alt=""
          className="profile-pic"
          onClick={handleProfile}
        />
      </header>

      <div className="promotion">
        <p className="discount">"Find your dream job now "</p>
        <p className="promotion-description">5 lakh+ jobs for you to explore</p>
      </div>
      <h3 className="job-finding-title">Find Your Job</h3>
      <div className="job-cards">
        <div className="job-card-1">
          <img src={jobHunt} alt="" className="job-hunt-image" />
          <p>Remote Job</p>
        </div>
        <div className="job-card-2" onClick={handleJobs}>
          <p>JOB POSTED</p>
          <p>BY ME</p>
        </div>
        <div className="job-card-3" onClick={handleAcceptedServiceRequests}>
          Accepted Service Requests
        </div>
        <div className="job-card-3" onClick={handleConfirmedServiceRequests}>
          Confirmed Service Requests
        </div>
        <div className="action-button" onClick={handleActionsRequired}>
          <p>Action Required</p>
          <p>Job Posts</p>
        </div>
        <div className="confirmed-jobs" onClick={handleConfirmedJobByWorker}>
          <p>Confirmed Jobs</p>
        </div>
      </div>

      <div className="nav-items-list">
        <img src={Home} alt="" onClick={handleHome} />
        {/* <img src={add} alt="" onClick={handleAddJob} /> */}
        <img src={Chat} alt="" />
      </div>
      <ShowAllServiceRequests />
    </StyledHomeScreen>
  );
};

export default HomeScreen;
