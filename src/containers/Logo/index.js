import React from "react";
import { StyledLogo } from "./style";
// import logo_img from "../../assets/logo_img.png";
import LogoImage from "../../assets/logo_img.png";

const Logo = () => {
  return (
    <StyledLogo className="styled-logo">
      <div className="logo">
        <img src={LogoImage} alt="logoimage" className="logo-image" />
        <p>SkillSync</p>
      </div>
    </StyledLogo>
  );
};

export default Logo;
