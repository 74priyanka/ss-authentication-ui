import React from "react";
import { StyledSignup } from "./style";
import googleImg from "../../assets/google.png";
import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";
import { colors } from "../../Constants/colors";
import useSignupHandler from "./hooks/useSignupHandler";
import {
  handleSignUp,
  handleForgotPassword,
  handleLogin,
  handleInputChange,
} from "./helpers";

const Signup = () => {
  const { navigate, formData, setFormData, mutation, userType } =
    useSignupHandler();

  return (
    <StyledSignup className="styled-signup">
      <h1 className="signup-title">
        {userType === "customer"
          ? "Create an Account as a Customer"
          : "Create an Account as a Worker"}
      </h1>
      <p className="signup-description">
        {userType === "customer"
          ? "Experience Quality Service: Create Your Customer Account Today"
          : "Start Your Journey with Us: Create Your Worker Account Today"}
      </p>
      <Inputs
        type="text"
        label="FullName"
        name="userName"
        onChange={(e) => handleInputChange(e, setFormData)}
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="text"
        label="Email"
        name="email"
        onChange={(e) => handleInputChange(e, setFormData)}
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="Password"
        label="Password"
        name="password"
        onChange={(e) => handleInputChange(e, setFormData)}
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

        <p
          className="forgot-link"
          onClick={() => handleForgotPassword(navigate)}
        >
          Forgot Password?
        </p>
      </div>
      <Buttons
        label="SIGNUP"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        onClick={() => handleSignUp(mutation, formData, navigate)}
      />
      <Buttons
        imgSrc={googleImg}
        label="SIGN IN WITH GOOGLE"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
      />
      <p className="login-link">
        You don't have an account yet?{" "}
        <span
          className="login-link-text"
          onClick={() => handleLogin(navigate, userType)}
        >
          Sign in
        </span>
      </p>
    </StyledSignup>
  );
};

export default Signup;
