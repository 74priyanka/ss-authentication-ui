import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";
export const StyledSignup = styled.div`
  background-color: ${colors.secondary};
  width: calc(100% - 48px);
  height: calc(100% - 24px);
  padding: 12px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .signup-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 0px;
    text-align: center;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 30px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 32px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 36px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 36px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      font-size: 40px;
    }
  }

  .signup-description {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 14px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 16px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      font-size: 18px;
    }
  }

  .forgot-password {
    display: flex;
    align-items: center;
    gap: 258px;
    margin-bottom: 20px;
    flex-direction: row;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      gap: 62px;
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      gap: 108px;
      font-size: 16px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      gap: 152px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.SMALL_TABLET)} {
      gap: 252px;
    }
    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.TABLET)} {
      gap: 252px;
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-container .checkmark {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #d6cdfe;
    border-radius: 4px;
    margin-right: 10px;
  }

  .checkbox-container input:checked + .checkmark {
    background-color: #d6cdfe;
  }

  .checkbox-container .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked + .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .forgot-link {
    color: #007bff;
    text-decoration: none;
    cursor: pointer;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 16px;
    }
  }

  .login-link {
    font-size: 14px;
    margin-top: 20px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 13px;
    }

    .login-link-text {
      color: ${colors.secondary_text};
      text-decoration: underline;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .input-container {
    width: 100%;
    max-width: 400px;
    margin-bottom: 16px;
  }
`;
