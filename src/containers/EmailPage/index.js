import React from "react";
import { StyledEmailPage } from "./style";
import emailImage from "../../assets/email_check_img.png";
import Buttons from "../../reusableComponents/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../Constants/colors";

const EmailPage = () => {
  const navigate = useNavigate();

  const handleOpenResetSuccess = () => {
    navigate("/resetSuccessPage");
  };

  const handleOpenEmail = () => {
    // opening email
    window.open("mailto:");
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };
  return (
    <StyledEmailPage className="styled-email-page">
      <h1 className="heading">Check Your Email</h1>
      <p className="description">
        We have sent the reset password to the email address
        brandonelouis@gmial.com
      </p>

      <img
        src={emailImage}
        alt=""
        className="email-image"
        onClick={handleOpenResetSuccess}
      />

      <Buttons
        label="OPEN YOUR EMAIL"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={handleOpenEmail}
      />

      <Buttons
        label="BACK TO LOGIN"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
        onClick={handleBackToLogin}
      />

      <p className="resend-link">
        You have not received the email?{" "}
        <span className="resend-text">Resend</span>
      </p>
    </StyledEmailPage>
  );
};

export default EmailPage;
