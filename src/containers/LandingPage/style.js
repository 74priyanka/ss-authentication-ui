import styled from "styled-components";
import { colors } from "../../Constants/colors";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensure full width */
  height: 100%; /* Ensure full height */
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  box-sizing: border-box; /* Ensure padding does not cause overflow */
  overflow: hidden; /* Prevent scrollbars */
  margin: 0;
  padding: 0;

  overflow: hidden;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .logo-image {
      width: 100px;
      height: 100px;

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

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        width: 90px;
        height: 90px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        width: 100px;
        height: 100px;
      }
    }

    p {
      font-size: 2rem;
      margin-top: 10px;

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        font-size: 1rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
        font-size: 1.5rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
        font-size: 1.8rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
        font-size: 2rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        font-size: 2rem;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        font-size: 2.5rem;
      }
    }
  }
`;
