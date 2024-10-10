import styled from "styled-components";

export const StyledDatePicker = styled.div`
  label {
    font-size: 24px; /* Default size */

    /* Responsive styles */
    @media (max-width: 768px) {
      /* Tablet and smaller */
      font-size: 20px;
    }

    @media (max-width: 480px) {
      /* Mobile */
      font-size: 16px;
    }
  }

  input {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
`;
