import styled from "styled-components";

export const StyledSplashScreen = styled.div`
  background-color: aliceblue;
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
  }
`;
