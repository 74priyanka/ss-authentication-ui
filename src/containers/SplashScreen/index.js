import React from "react";
import { StyledSplashScreen } from "./style";
import splashImage from "../../assets/splash_img.png";
import arrowImage from "../../assets/arrow_img.png";

const SplashScreen = () => {
  return (
    <StyledSplashScreen className="styled-splash-screen">
      <div className="splash-screen">
        <p className="text">SkillSync</p>
        <img src={splashImage} alt="" className="splash-image" />
        <div className="dream-job">
          Find your
          <span>Dream Job</span>
          Here !
        </div>

        <p className="explore">
          Explore all the most exciting job roles based on your interest and
          study major.
        </p>
        <div className="arrow">
          <img src={arrowImage} alt="" />
        </div>
      </div>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
