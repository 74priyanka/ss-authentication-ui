import styled from "styled-components";
import { colors } from "../../../Constants/colors";
import {
  mediaQuery,
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
} from "../../../Constants/breakpoints";

export const StyledCreateServiceRequests = styled.div`
  background-color: ${colors.secondary};
  padding: 32px;
  box-sizing: border-box;

  .create-service-request-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }

  .remove-btn {
    cursor: pointer;
    width: 24px;
    height: 24px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      width: 20px;
      height: 20px;
    }
  }

  .create-service-header {
    font-size: 24px;
    margin-bottom: 16px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 20px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 22px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 26px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      font-size: 30px;
    }
  }

  .profile-pic {
    cursor: pointer;
  }
  .input {
    display: flex;
    flex-direction: column;
    gap: 12px;

    textarea {
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      width: 100%;
      box-sizing: border-box;

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        font-size: 12px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        font-size: 14px;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        font-size: 16px;
      }
    }
  }

  .status-option {
    background-color: ${colors.input_bg};
    color: ${colors.input_label_text};
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    button {
      width: 100%;

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
        width: 90%;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
        width: 80%;
      }

      ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
        width: 60%;
      }
    }
  }

  ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
    padding: 16px;
  }

  ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
    padding: 24px;
  }

  ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
    padding: 40px;
  }
`;
