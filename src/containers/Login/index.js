import React from "react";
import { StyledLogin } from "./style";
import googleImg from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";
import { colors } from "../../Constants/colors";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/forgotPage");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <StyledLogin className="styled-login">
      <h1 className="welcome-title">Welcome to SkillSync</h1>
      <p className="welcome-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
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
        <label class="checkbox-label">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <span class="checkbox-checkmark"></span>
          Remember Me
        </label>

        <p className="forgot-link" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>

      <Buttons
        label="LOGIN"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={handleLogin}
      />
      <Buttons
        imgSrc={googleImg}
        label="SIGN IN WITH GOOGLE"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
      />
      <p className="signup-link">
        You don't have an account yet?{" "}
        <span className="signup-link-text" onClick={handleSignUp}>
          Sign up
        </span>
      </p>
    </StyledLogin>
  );
};

export default Login;
