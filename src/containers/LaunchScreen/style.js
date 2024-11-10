import styled, { keyframes } from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const StyledLaunchScreen = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;

  .app-title {
    font-size: 52px;
    font-weight: 700;
    /* position: absolute; */
    right: 0px;
    margin: 0;
    animation: ${fadeIn} 1s ease-in-out;

    ${mediaQuery("MOBILE_SMALL")} {
      font-size: 24px;
    }
    ${mediaQuery("MOBILE_MEDIUM")} {
      font-size: 32px;
    }
    ${mediaQuery("TABLET")} {
      font-size: 44px;
    }
  }

  .splash-image {
    /* position: absolute; */
    top: 20%; /* Adjusted top position */
    transform: translateY(-50%);
    animation: ${float} 3s ease-in-out infinite;

    ${mediaQuery("MOBILE_SMALL")} {
      width: 160px;
      top: 15%; /* Adjusted top position for smaller screens */
    }
    ${mediaQuery("MOBILE_MEDIUM")} {
      width: 240px; /* Adjusted width for medium screens */
      top: 20%; /* Further adjusted top position */
    }
    ${mediaQuery("TABLET")} {
      width: 320px;
      top: 25%; /* Adjusted top position for tablets */
    }
  }

  .explore-description {
    color: #524b6b;
    /* position: absolute; */
    bottom: 20%; /* Increased bottom margin to create more space */
    font-size: 30px;
    margin: 0;
    animation: ${fadeIn} 1.2s ease-in-out;

    ${mediaQuery("MOBILE_SMALL")} {
      font-size: 18px;
      bottom: 25%; /* Adjusted bottom position for smaller screens */
    }
    ${mediaQuery("MOBILE_MEDIUM")} {
      font-size: 24px; /* Adjusted font size for medium screens */
      bottom: 15%; /* Further adjusted bottom position */
    }
    ${mediaQuery("TABLET")} {
      font-size: 26px;
      bottom: 12%; /* Adjusted bottom position for tablets */
    }
  }

  .button-container {
    display: flex;
    gap: 20px;
    margin-top: auto;
    margin-bottom: 20px;
    width: 100%;
    justify-content: center;
  }
`;
