import styled from "styled-components";

export const StyledSignup = styled.div`
  background-color: aliceblue;
  width: 430px;
  height: 800px;
  border-radius: 20px;

  .signup-page {
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .forgot-pass {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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

  span {
    color: #fca34d;
    text-decoration: underline;
  }
`;
