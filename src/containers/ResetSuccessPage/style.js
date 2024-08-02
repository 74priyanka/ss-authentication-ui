import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";

export const StyledResetSuccessPage = styled.div`
  /* background-color: aliceblue;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .successful {
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .success-img {
    margin-top: 32px;
    margin-bottom: 72px;
  } */

  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 108px;

  .success-title {
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

  .success-message {
    font-size: 20px;
    margin-bottom: 24px;
    text-align: center;

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

  .success-image {
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
`;
