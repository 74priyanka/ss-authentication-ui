import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";

export const StyledButton = styled.div`
  width: 72%;
  display: flex;
  justify-content: center;

  /* .button-container {
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      width: 68%;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      width: 72%;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      width: 84%;
    }
  } */

  .btn {
    border: none;
    border-radius: 8px;
    font-size: 16px;
    padding: 10px;
    width: 84%;
    max-width: 400px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary}; /* Default background color */
    color: white; /* Default text color */
    cursor: pointer;
    &:hover {
      cursor: pointer;
      transition: box-shadow 0.5s ease;
      box-shadow: 2px 6px 16px rgba(0, 0, 0, 0.15);
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 14px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 14px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 16px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 17px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 18px;
    }
  }

  .button-img {
    margin-right: 8px;
    height: 20px; /* Adjust image size if needed */
    width: auto;
  }
`;
