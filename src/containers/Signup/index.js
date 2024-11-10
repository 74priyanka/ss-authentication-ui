import React, { useState, useRef, useEffect } from "react";
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

import { jobCategories } from "../../Constants/jobCategories"; // Adjust the import path as needed

const Signup = () => {
  const { navigate, formData, setFormData, workerMutation } =
    useSignupHandler();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Add skill to formData
  const addSkill = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill],
      }));
    }
  };

  // Remove skill from formData
  const removeSkill = (skill) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((s) => s !== skill),
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <StyledSignup className="styled-signup">
      <h1 className="signup-title">Create an Account as a Worker</h1>
      <p className="signup-description">
        Start Your Journey with Us: Create Your Worker Account Today
      </p>

      <Inputs
        type="text"
        label="FullName"
        name="name"
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
        type="number"
        label="Contact"
        name="contact"
        onChange={(e) => handleInputChange(e, setFormData)}
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Inputs
        type="password"
        label="Password"
        name="password"
        onChange={(e) => handleInputChange(e, setFormData)}
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />

      <div className="skills-container" ref={dropdownRef}>
        <label className="skills-heading">Skills</label>
        <div
          className="skills-input"
          onClick={toggleDropdown}
          style={{ position: "relative" }}
        >
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              <span key={index} className="skills">
                {skill}
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent dropdown from toggling
                    removeSkill(skill);
                  }}
                >
                  x
                </button>
              </span>
            ))
          ) : (
            <span>Select Skills</span>
          )}
          <span className={`arrow ${isDropdownOpen ? "open" : ""}`}></span>
        </div>

        {isDropdownOpen && (
          <ul className="skills-list">
            {jobCategories.map((category, index) => (
              <li
                key={index}
                onClick={() => {
                  addSkill(category);
                  setIsDropdownOpen(false);
                }}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: formData.skills.includes(category)
                    ? colors.input_bg
                    : "#fff",
                  color: colors.input_label_text,
                }}
                className="skill-item"
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
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
        onClick={() => handleSignUp(workerMutation, formData, navigate)}
      />

      <Buttons
        imgSrc={googleImg}
        label="SIGN IN WITH GOOGLE"
        labelColor={colors.secondary_btn_label}
        backgroundColor={colors.secondary_btn_bg}
      />
      <p className="login-link">
        You don't have an account yet?{" "}
        <span className="login-link-text" onClick={() => handleLogin(navigate)}>
          Sign in
        </span>
      </p>
    </StyledSignup>
  );
};

export default Signup;
