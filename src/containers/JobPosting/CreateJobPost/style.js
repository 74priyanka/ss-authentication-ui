import styled from "styled-components";
import { colors } from "../../../Constants/colors";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../../Constants/breakpoints";

export const StyledCreateJobPost = styled.div`
  height: 100%;
  background-color: ${colors.secondary};
  padding: 16px;
  box-sizing: border-box;

  /* General Layout */
  .create-job-header {
    font-size: 24px; /* Smaller for mobile */
    margin-bottom: 16px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 32px; /* Larger for tablet */
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      font-size: 36px; /* Larger for desktop */
    }
  }

  .create-job-post__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      margin-bottom: 24px;
    }
  }

  .profile-pic {
    cursor: pointer;
  }

  textarea {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 16px;
      padding: 16px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      font-size: 18px;
      padding: 20px;
    }
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 12px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      gap: 16px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      gap: 20px;
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

  .remove-btn {
    cursor: pointer;
    width: 24px;
    height: 24px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      width: 32px;
      height: 32px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      width: 40px;
      height: 40px;
    }
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      flex-direction: row;
      gap: 16px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.DESKTOP)} {
      gap: 20px;
    }

    button {
      width: 100%;
    }
  }
`;
