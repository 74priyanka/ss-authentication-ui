import React from "react";
import { StyledResetSuccessPage } from "./style";
import successfulImage from "../../assets/successful_img.png";
import Buttons from "../../reusableComponents/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../Constants/colors";

const ResetSuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };
  return (
    <StyledResetSuccessPage className="styled-reset-success-page">
      <h1 className="success-title">Successfully</h1>
      <p className="success-message">
        Your password has been updated, please change your password regularly to
        avoid this happening
      </p>
      <img src={successfulImage} alt="" className="success-image" />

      <Buttons
        label="CONTINUE"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
      />

      <Buttons
        label="BACK TO LOGIN"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
        onClick={handleBackToLogin}
      />
    </StyledResetSuccessPage>
  );
};

export default ResetSuccessPage;
