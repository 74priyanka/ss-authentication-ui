import React, { useState } from "react";
import { StyledLogin } from "./style";
import googleImg from "../../assets/google.png";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";
import { colors } from "../../Constants/colors";
import useLoginHandler from "./hooks/useLoginHandler";
import {
  handleInputChange,
  handleForgotPassword,
  handleLogin,
  handleSignUp,
} from "./helpers";

const Login = (welcomeText) => {
  const { location, navigate, formData, setFormData, mutation } =
    useLoginHandler();

  return (
    <StyledLogin className="styled-login">
      <h1 className="welcome-title">Welcome to SkillSync</h1>{" "}
      {/*  will come through props */}
      <p className="welcome-text">{location.state?.welcomeText}</p>
      <Inputs
        type="text"
        label="Email"
        name="email"
        value={formData.email}
        onChange={(e) => handleInputChange(e, setFormData)}
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="Password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={(e) => handleInputChange(e, setFormData)}
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

        <p
          className="forgot-link"
          onClick={() => handleForgotPassword(navigate)}
        >
          Forgot Password?
        </p>
      </div>
      <Buttons
        label="LOGIN"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={() => handleLogin(mutation, formData)}
      />
      <Buttons
        imgSrc={googleImg}
        label="SIGN IN WITH GOOGLE"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
      />
      <p className="signup-link">
        You don't have an account yet?{" "}
        <span
          className="signup-link-text"
          onClick={() => handleSignUp(location, navigate)}
        >
          Sign up
        </span>
      </p>
    </StyledLogin>
  );
};

export default Login;
