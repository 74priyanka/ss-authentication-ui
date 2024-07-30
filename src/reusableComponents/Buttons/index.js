// DynamicButton.js
import React from "react";
// import PropTypes from 'prop-types';
import { StyledButton } from "./style";

const Button = ({ label, onClick, labelColor, backgroundColor, imgSrc }) => {
  return (
    <StyledButton className="button-container">
      <button
        className="btn "
        onClick={onClick}
        style={{ color: labelColor, backgroundColor }}
      >
        {<img src={imgSrc} alt="" className="button-img" />}
        {label}
      </button>
    </StyledButton>
  );
};

export default Button;
