import styled from "styled-components";

export const StyledLogo = styled.div`
  background-color: #130160;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .logo {
    height: 100%;
    width: 100%;
    color: white;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-image {
    width: 36px;
    height: 36px;
  }

  .logo > p {
    font-size: 24px;
  }

  /* Mobile Devices */
  /* @media screen and (max-width: 425px) {
    .logo {
      width: 416px;
      height: 916px;
    }
  } */

  /* Tablets */
  /* @media screen and (min-width: 426px) and (max-width: 768px) {
    .logo {
      width: 760px;
      height: 1300px;
    }
  } */
`;
