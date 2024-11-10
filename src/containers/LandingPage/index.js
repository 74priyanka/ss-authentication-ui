import React from "react";
import { StyledLandingPage } from "./style";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/logo_img.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLaunchScreen = () => {
    navigate("/launch");
  };
  return (
    <StyledLandingPage className="styled-landing-page">
      <div className="logo">
        <img
          src={LogoImage}
          alt="logoimage"
          className="logo-image"
          onClick={handleLaunchScreen}
        />
        <p className="logo-text" onClick={handleLaunchScreen}>
          SkillSync
        </p>
        <p className="tagline" onClick={handleLaunchScreen}>
          Where needs meet skills-connect, book, and get things done with
          SkillSync
        </p>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
