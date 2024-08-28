import React from "react";
import { StyledHomeScreen } from "./style";
import profilePic from "../../assets/profilePic.png";
import Buttons from "../../reusableComponents/Buttons";
import { colors } from "../../Constants/colors";
import jobHunt from "../../assets/jobHunt.png";
import Add from "../../assets/Add.png";
import Home from "../../assets/Home.png";
import Chat from "../../assets/Chat.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleJobCard = () => {
    navigate("/showJobPost");
  };
  const handleAddJob = () => {
    navigate("/createJobPost");
  };

  return (
    <StyledHomeScreen className="home-screen">
      <header className="header">
        <h1 className="title">
          Welcome <span>Priyanka Chauhan</span>
        </h1>
        <img src={profilePic} alt="" className="profile-pic" />
      </header>

      <div className="promotion">
        <p className="discount">50% off</p>
        <p className="promotion-description">take any courses</p>
        <Buttons
          label="Join Now"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.secondary_text}
          className="join-button"
        />
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
      <h3 className="recent-jobs">Recent Job List</h3>
      {/* <div className="job-list">
        <img src="" alt="" />
        <h3>Electrician</h3>
      </div> */}

      <div className="nav-items-list">
        <img src={Home} alt="" />
        <img src={Add} alt="" onClick={handleAddJob} />
        <img src={Chat} alt="" />
      </div>
    </StyledHomeScreen>
  );
};

export default HomeScreen;
