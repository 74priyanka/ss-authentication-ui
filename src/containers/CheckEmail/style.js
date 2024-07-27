import styled from "styled-components";

export const StyledCheckEmail = styled.div`
  background-color: aliceblue;
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
  }
`;
