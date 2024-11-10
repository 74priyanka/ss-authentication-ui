import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledActionRequiredByCustomer = styled.div`
  background-color: ${colors.secondary};

  padding: 28px;
  min-height: 100vh; /* Ensure content takes up at least the full viewport height */
  position: relative;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .home-screen {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }

  .action-by-customer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .action-by-customer-body {
    display: flex;
    flex-wrap: wrap;
  }

  .action-container {
    background-color: #eee5fb;
    border: none;
    width: auto;
  }

  .accept-reject-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .confirm {
    background-color: ${colors.secondary};
    color: ${colors.primary_btn_bg};
  }

  .reject {
    background-color: ${colors.primary_btn_bg};
    color: white;
  }
`;
