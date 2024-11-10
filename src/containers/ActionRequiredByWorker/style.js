import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledActionRequiredByWorker = styled.div`
  background-color: #eee5fb;
  padding: 28px;
  min-height: 100vh; /* Ensure content takes up at least the full viewport height */
  position: relative;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .homescreen {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }

  .action-by-worker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .action-container {
    background-color: ${colors.secondary};
    border: none;
  }

  .accept-reject-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .confirm {
    background-color: #eee5fb;
    color: ${colors.primary_btn_bg};
  }

  .reject {
    background-color: ${colors.primary_btn_bg};
    color: white;
  }
`;
