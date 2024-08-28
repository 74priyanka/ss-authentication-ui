import React from "react";
import backArrow from "../../../../assets/backArrow.png";
import Buttons from "../../../../reusableComponents/Buttons";
import { colors } from "../../../../Constants/colors";
import { StyledAboutMe } from "./style";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleBackArrow = () => {
    navigate("/profilePage");
  };
  return (
    <StyledAboutMe>
      <img
        src={backArrow}
        alt="backArrow"
        className="back-arrow"
        onClick={handleBackArrow}
      />
      <h2 className="about-title">About Me</h2>
      <div className="about-detail">
        <input className="about-info"></input>
        <Buttons
          label="SAVE"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.primary_btn_bg}
          className="save-btn"
        />
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
