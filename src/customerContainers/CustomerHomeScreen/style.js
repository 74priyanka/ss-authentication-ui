import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
  REM_SIZES,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";
export const StyledCustomerHomeScreen = styled.div`
  background-color: ${colors.secondary};
  width: 100vw; /* Full viewport width */
  height: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden; /* Prevent horizontal overflow */
  max-width: 100vw; /* Prevent background overflow */

  /* Header styling */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Welcome text with larger size */
  .welcome-text {
    color: ${colors.tertiary_text};
    font-size: 1.5rem; /* Make text larger */

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 2rem; /* Bigger size on tablets */
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      font-size: 2.5rem; /* Even larger on desktops */
    }
  }

  .profile-pic {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  /* Adjusted Promotion section */
  .promotion {
    background-color: ${colors.primary};
    width: 97%; /* Reduced width to prevent overflow */
    border-radius: 10px;
    color: white;
    padding: 10px 16px; /* Adjusted padding */
    font-size: ${REM_SIZES.DESKTOP};
    text-align: center;
    margin: 16px auto; /* Centered with margin auto */

    /* Responsive changes */
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: ${REM_SIZES.MOBILE_SMALL};
      padding: 8px 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: ${REM_SIZES.TABLET};
      padding: 10px 14px;
      width: 97%; /* Smaller width on tablets */
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      font-size: ${REM_SIZES.DESKTOP};
      padding: 12px 16px;
      width: 80%; /* Smaller width on desktops */
    }
  }

  /* Job title and recent jobs */
  .job-finding-title,
  .recent-jobs {
    font-size: 24px;
    color: ${colors.tertiary_text};
    margin-top: 20px;
  }

  /* Job cards grid */
  .job-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 20px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      grid-template-columns: 1fr;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .job-card-1,
  .job-card-2,
  .job-card-3 {
    background-color: #afecfe;
    font-size: 24px;
    border-radius: 10px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }

    &:nth-child(2) {
      background-color: #beaffe;
    }

    &:nth-child(3) {
      background-color: #ffd6ad;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      height: 150px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      height: 180px;
    }
  }

  /* Sticky navigation bar */
  .nav-items-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 10px 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  img {
    cursor: pointer;
    width: 30px;
    height: 30px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      width: 40px;
      height: 40px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      width: 50px;
      height: 50px;
    }
  }
`;
