import React from "react";
import { StyledForgotPassword } from "./style";
import passwordImage from "../../assets/password_img.png";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";

const ForgotPassword = () => {
  return (
    <StyledForgotPassword className="styled-forgot-password">
      <div className="forgot-password">
        <h1>Forgot Password</h1>
        <p style={{ textAlign: "center" }}>
          To reset your password, you need your email or mobile number that can
          be authenticated
        </p>
        <img src={passwordImage} alt="" className="pass-img" />
        <Inputs
          type="text"
          label="Email"
          labelColor="#000"
          inputColor="#000"
          backgroundColor="#fff"
        />

        <Buttons
          label="RESET PASSWORD"
          labelColor="white"
          backgroundColor="#130160"
        />
        <Buttons
          label="BACK TO LOGIN"
          labelColor="#130160"
          backgroundColor="#d6cdfe"
        />
      </div>
    </StyledForgotPassword>
  );
};

export default ForgotPassword;
