import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledServiceRequestsCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background-color: #fff;

  .service-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .service-card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .options-menu {
    display: flex;
    gap: 8px;
  }

  .service-card-body {
    margin-top: 16px;
    font-size: 1rem;
    color: #333;
  }

  .service-card-body p {
    margin-bottom: 8px;
  }
`;
