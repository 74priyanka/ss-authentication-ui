import styled from "styled-components";
import { colors } from "../../Constants/colors";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";

// Define keyframes for animations
const fadeIn = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

const bounce = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

export const StyledLandingPage = styled.div`
  ${fadeIn} /* Include keyframes */
  ${bounce} /* Include keyframes */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Full height of viewport */
  background-color: ${colors.secondary_btn_bg};
  color: white;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: fadeIn 1s ease-in-out;

    .logo-image {
      width: 100px;
      height: 100px;
      cursor: pointer;
      animation: bounce 2s ease infinite;

      /* Responsive adjustments */
      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        width: 50px;
        height: 50px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
        width: 70px;
        height: 70px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
        width: 80px;
        height: 80px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
        width: 90px;
        height: 90px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        width: 100px;
        height: 100px;
      }
    }

    .logo-text {
      cursor: pointer;
      font-size: 4rem;
      margin-top: 10px;
      margin-bottom: 0px;
      animation: fadeIn 2s ease-in-out;

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        font-size: 1.5rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
        font-size: 1.8rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
        font-size: 2rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
        font-size: 2.5rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        font-size: 3rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        font-size: 4rem;
      }
    }

    .tagline {
      cursor: pointer;
      font-size: 2rem;
      margin-top: 0px;
      animation: fadeIn 2s ease-in-out;

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        font-size: 1rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
        font-size: 1rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
        font-size: 1rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
        font-size: 1.5rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        font-size: 1.8rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        font-size: 2rem;
      }
    }
  }
`;
