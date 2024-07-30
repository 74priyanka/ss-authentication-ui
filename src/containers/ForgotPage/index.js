import React from "react";
import { StyledForgotPage } from "./style";
import passwordImage from "../../assets/password_img.png";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../Constants/colors";

const ForgotPage = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // reset password logic
    navigate("/emailPage");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <StyledForgotPage className="styled-forgot-page">
      <h1 className="title">Forgot Password</h1>
      <p className="description">
        To reset your password, you need your email or mobile number that can be
        authenticated
      </p>

      <img src={passwordImage} alt="" className="image" />

      <Inputs
        type="text"
        label="Email"
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />

      <Buttons
        label="RESET PASSWORD"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={handleResetPassword}
      />

      <Buttons
        label="BACK TO LOGIN"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
        onClick={handleLogin}
      />
    </StyledForgotPage>
  );
};

export default ForgotPage;
