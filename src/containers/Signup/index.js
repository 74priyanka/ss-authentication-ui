import React from "react";
import { StyledSignup } from "./style";
import googleImg from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";
import { colors } from "../../Constants/colors";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    //  signup logic
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/forgotPage");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <StyledSignup className="styled-signup">
      <h1 className="signup-title">Create an Account</h1>
      <p className="signup-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <Inputs
        type="text"
        label="FullName"
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="text"
        label="Email"
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="Password"
        label="Password"
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <div className="forgot-password">
        <label class="checkbox-container">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <span class="checkmark"></span>
          Remember Me
        </label>

        <p className="forgot-link" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>

      <Buttons
        label="SIGNUP"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={handleSignUp}
      />
      <Buttons
        imgSrc={googleImg}
        label="SIGN IN WITH GOOGLE"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
      />

      <p className="login-link">
        You don't have an account yet?{" "}
        <span className="login-link-text" onClick={handleLogin}>
          Sign in
        </span>
      </p>
    </StyledSignup>
  );
};

export default Signup;
