import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";
export const StyledLaunchScreen = styled.div`
  /* background-color: aliceblue;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .text {
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 40px;
    font-weight: 700;
  }

  .splash-image {
    margin-left: 44px;
    margin-top: 44px;
  }

  .dream-job {
    font-size: 36px;
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    margin-top: 64px;
    font-weight: 700;
  }

  span {
    color: #fca34d;
    text-decoration: underline;
  }

  .explore {
    color: #524b6b;
    margin-left: 32px;
    margin-right: 24px;
  }

  .arrow {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
  } */

  background-color: ${colors.secondary};
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  position: relative; /* Ensure relative positioning for absolute child elements */

  .app-title {
    font-size: 52px;
    font-weight: 700;
    position: absolute;
    top: 20px;
    right: 20px;
    margin: 0;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 24px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 32px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 36px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 40px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 44px;
    }
  }

  .splash-image {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      width: 220px;
      height: auto;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      width: 260px;
      height: auto;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      width: 280px;
      height: auto;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      width: 300px;
      height: auto;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      width: 320px;
      height: auto;
    }
  }

  .job-tagline {
    font-size: 52px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 20px;
    bottom: 20%;
    font-weight: 700;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 30px;
      bottom: 38%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 34px;
      bottom: 32%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 36px;
      bottom: 28%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 40px;
      bottom: 24%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 44px;
      bottom: 20%;
    }
  }

  span {
    color: #fca34d;
    text-decoration: underline;
  }

  .explore-description {
    color: #524b6b;
    position: absolute;
    left: 20px; /* Ensure left alignment is the same as job-tagline */
    margin: 0;
    bottom: 7%;
    font-size: 30px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 18px;
      bottom: 22%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 24px;
      bottom: 18%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 24px;
      bottom: 14%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 28px;
      bottom: 10%;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 26px;
      bottom: 9%;
    }
  }

  .arrow-link {
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      bottom: 10px;
      right: 10px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      bottom: 15px;
      right: 15px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      bottom: 20px;
      right: 20px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      bottom: 25px;
      right: 25px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      bottom: 30px;
      right: 30px;
    }
  }
`;
