import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";

export const StyledEmailPage = styled.div`
  /* background-color: aliceblue;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .check-email {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
  }
  input {
    border: none;
    border-radius: 8px;
    font-size: 24px;
  }

  .email-img {
    margin-top: 32px;
    margin-bottom: 72px;
  }
  span {
    color: #fca34d;
    text-decoration: underline;
  } */

  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  .heading {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 0px;

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

  .description {
    text-align: center;
    font-size: 20px;
    margin-bottom: 24px;

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

  .email-image {
    width: 128px;
    height: auto;
    margin: 24px 0;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      width: 90px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      width: 100px;
    }
  }

  .resend-link {
    font-size: 16px;
    margin-top: 16px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 14px;
    }
  }

  .resend-text {
    color: ${colors.secondary_text};
    text-decoration: underline;
    font-weight: bold;
  }
`;
