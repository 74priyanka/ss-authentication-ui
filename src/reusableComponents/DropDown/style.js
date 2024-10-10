import styled from "styled-components";

export const StyledDropDown = styled.div`
  position: relative;
  width: 100%;
  label {
    font-size: 16px;
    display: block;
    margin-bottom: 8px;
    color: ${({ labelColor }) => labelColor || "#000"};

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
  select {
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }
  .drop-down-wrapper {
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  .drop-down-input {
    width: 100%;
    padding: 10px 36px 10px 12px;
    font-size: 16px;
    color: inherit;
    background-color: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .drop-down-arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 18px;
    cursor: pointer;
  }

  .drop-down-menu {
    position: absolute;
    background-color: white;
    width: 100%;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
    margin-top: 4px;
    border-radius: 4px;
  }

  .drop-down-option {
    padding: 12px 16px;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
