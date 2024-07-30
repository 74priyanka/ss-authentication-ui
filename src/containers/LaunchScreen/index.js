import React from "react";
import { StyledLaunchScreen } from "./style";
import splashImage from "../../assets/splash_img.png";
import arrowImage from "../../assets/arrow_img.png";
import { Link, useNavigate } from "react-router-dom";

const LaunchScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <StyledLaunchScreen className="styled-launch-screen">
      <p className="app-title">SkillSync</p>
      <img src={splashImage} alt="" className="splash-image" />
      <div className="job-tagline">
        Find your
        <span>Dream Job</span>
        Here !
      </div>
      <div className="explore-description">
        <p>
          Explore all the most exciting job roles based on your interest and
          study major.
        </p>
      </div>

      <div className="arrow-link">
        <img src={arrowImage} alt="" onClick={handleLogin} />
      </div>
    </StyledLaunchScreen>
  );
};

export default LaunchScreen;
