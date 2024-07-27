import styled from "styled-components";

export const StyledInputs = styled.div`
  .input-containers {
    display: flex;
    flex-direction: column; /* Use column layout */
    margin-bottom: 15px;
    /* margin: 24px; */
  }

  .input-label {
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
  }
`;
