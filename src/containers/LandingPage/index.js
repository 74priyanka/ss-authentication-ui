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
      <div className="logo" onClick={handleLaunchScreen}>
        <img src={LogoImage} alt="logoimage" className="logo-image" />
        <p>SkillSync</p>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
