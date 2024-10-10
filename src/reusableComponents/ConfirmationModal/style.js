import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Make sure the modal is on top */

  .modalContent {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalButton {
    margin: 0 10px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${colors.secondary_btn_label};
    background-color: ${colors.secondary_btn_bg};
  }
`;
