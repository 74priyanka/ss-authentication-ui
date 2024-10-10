import React from "react";
import { StyledCustomerHomeScreen } from "./style";
import profilePic from "../../assets/profilePic.png";
import Buttons from "../../reusableComponents/Buttons";
import { colors } from "../../Constants/colors";
import jobHunt from "../../assets/jobHunt.png";
import Add from "../../assets/Add.png";
import Home from "../../assets/Home.png";
import Chat from "../../assets/Chat.png";
import { useNavigate } from "react-router-dom";

const CustomerHomeScreen = () => {
  const navigate = useNavigate();

  const handleJobCard = () => {
    navigate("/showServiceRequests");
  };
  const handleAddJob = () => {
    navigate("/createServiceRequests");
  };

  const handleProfile = () => {
    navigate("/customerProfile");
  };

  return (
    <StyledCustomerHomeScreen className="home-screen">
      <header className="header">
        <h1>Welcome to customer screen</h1>
        <h1 className="title">
          Welcome <span>Priyanka Chauhan</span>
        </h1>
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
          <p>JOB POSTED</p>
          <p>BY ME</p>
        </div>
        <div className="job-card-3">
          <p>37.1kk</p>
          <p>Part Time</p>
        </div>
      </div>

      <div className="nav-items-list">
        <img src={Home} alt="" />
        <img src={Add} alt="" onClick={handleAddJob} />
        <img src={Chat} alt="" />
      </div>
    </StyledCustomerHomeScreen>
  );
};

export default CustomerHomeScreen;
