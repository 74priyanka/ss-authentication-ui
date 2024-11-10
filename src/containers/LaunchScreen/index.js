import React from "react";
import { StyledLaunchScreen } from "./style";
import splashImage from "../../assets/splash_img.png";
import arrowImage from "../../assets/arrow_img.png";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../reusableComponents/Buttons";
import { colors } from "../../Constants/colors";

const LaunchScreen = () => {
  const navigate = useNavigate();

  const handleCustomer = () => {
    navigate("/login/customer");
  };

  const handleWorker = () => {
    navigate("/login/worker");
  };

  return (
    <StyledLaunchScreen className="styled-launch-screen">
      <p className="app-title">SkillSync</p>
      <img src={splashImage} alt="SkillSync Splash" className="splash-image" />

      <div className="explore-description">
        <p>Explore all the most exciting job roles based on your interest</p>
        <p>and services based on your needs</p>
      </div>

      <div className="button-container">
        <Buttons
          label="Need a Service"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.primary_btn_bg}
          onClick={handleCustomer}
        />
        <Buttons
          label="Want to Work"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.primary_btn_bg}
          onClick={handleWorker}
        />
      </div>
    </StyledLaunchScreen>
  );
};

export default LaunchScreen;
