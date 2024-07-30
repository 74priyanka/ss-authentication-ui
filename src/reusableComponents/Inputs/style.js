import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";

export const StyledInputs = styled.div`
  /* .input-containers {
    display: flex;
    flex-direction: column; 
    margin-bottom: 15px;
    margin: 24px;
  } */

  /* .input-label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  .inputs:focus {
    outline: none;
    border-color: #007bff;
  }
  .inputs {
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    width: 96%;
  } */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .input-label {
    margin-bottom: 5px;
    font-size: 14px;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 12px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 13px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 14px;
    }
  }

  .input-field {
    padding: 4px;
    border: none;
    border-radius: 8px;
    font-size: 40px;
    width: 100%;
    box-sizing: border-box;

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_SMALL)} {
      font-size: 20px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_MEDIUM)} {
      font-size: 28px;
    }

    ${mediaQuery(LAYOUT_MEDIA_QUERY_BREAKPOINTS.MOBILE_LARGE)} {
      font-size: 32px;
    }

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
`;
