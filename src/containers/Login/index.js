import React from "react";
import { StyledLogin } from "./style";
import googleImg from "../../assets/google.png";

import Buttons from "../../reusableComponents/Buttons";
import Inputs from "../../reusableComponents/Inputs";

const Login = () => {
  return (
    <StyledLogin className="styled-login">
      <div className="login-page">
        <h1>Welcome to SkillSync</h1>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <Inputs
          type="text"
          label="Email"
          labelColor="#000"
          inputColor="#000"
          backgroundColor="#fff"
        />
        <Inputs
          type="Password"
          label="Password"
          labelColor="#000"
          inputColor="#000"
          backgroundColor="#fff"
        />
        <div className="forgot-pass">
          <label class="checkbox-container">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <span class="checkmark"></span>
            Remember Me
          </label>

          <p>Forgot Password?</p>
        </div>

        <Buttons label="LOGIN" labelColor="white" backgroundColor="#130160" />
        <Buttons
          imgSrc={googleImg}
          label="SIGN IN WITH GOOGLE"
          labelColor="#130160"
          backgroundColor="#d6cdfe"
        />
        <p>
          You don't have an account yet? <span>Sign up</span>
        </p>
      </div>
    </StyledLogin>
  );
};

export default Login;
