import styled from "styled-components";
import { colors } from "../../../Constants/colors";

export const StyledShowServiceRequests = styled.div`
  background-color: #f5efff;
  padding: 28px;
  min-height: 100vh; /* Ensure content takes up at least the full viewport height */
  position: relative;
  /* overflow: hidden; */

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .home-screen {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }

  .show-serviceRequest-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Service card container - responsive grid layout */
  .service-card-container {
    /* display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 100px;
    margin-bottom: 70px; */

    width: 100%;
    display: grid;
    gap: 16px;
    padding-bottom: 100px;
    flex-grow: 1;
    margin-bottom: 70px;
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

  .service-card-container {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    button {
      font-size: 18px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 16px;
      padding: 8px;
    }
  }
`;
