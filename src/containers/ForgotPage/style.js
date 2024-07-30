import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";
export const StyledForgotPage = styled.div`
  /* background-color: aliceblue;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .forgot-password {
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
  .pass-img {
    margin-top: 32px;
    margin-bottom: 72px;
  } */

  background-color: ${colors.secondary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  .title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
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

  .image {
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

  .input-container {
    width: 100%;
    max-width: 400px;
    margin-bottom: 16px;
  }
`;
