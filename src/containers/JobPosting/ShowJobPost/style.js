import styled from "styled-components";
import { colors } from "../../../Constants/colors";

export const StyledShowJobPost = styled.div`
  background-color: ${colors.secondary};
  padding: 28px;
  height: 100vh; /* Use viewport height */
  position: relative; /* Ensure fixed button is within the container */
  overflow: hidden;

  h1 {
    text-align: center;
  }

  .show-jobpost-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Job card container */
  .job-card-container {
    width: 100%;
    display: grid;
    gap: 16px;
    padding-bottom: 100px; /* Space for the fixed button */
    flex-grow: 1; /* Ensure it takes available space */
    margin-bottom: 70px; /* Add margin to avoid overlapping with button */
  }

  /* Responsive grid layout for Job Cards */
  @media (min-width: 320px) {
    /* For mobile screens */
    .job-card-container {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 768px) {
    /* For tablets */
    .job-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    /* For larger screens */
    .job-card-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .profile-pic {
    cursor: pointer;
  }

  /* Fixed button styling */
  .button-container {
    position: fixed;
    left: 0;
    bottom: 0px;
    background-color: white;
    padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 100%;
  }

  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.primary_btn_bg};
    color: ${colors.primary_btn_label};
    border: none;
    border-radius: 50%;
    font-size: 20px;
    padding: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: ${colors.secondary_btn_bg};
    color: ${colors.secondary_btn_label};
    outline: none;
  }
`;
