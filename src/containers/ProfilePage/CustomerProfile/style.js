import styled from "styled-components";
import { colors } from "../../../Constants/colors";

export const StyledCustomerProfile = styled.div`
  background-color: ${colors.secondary};

  .profile-page__header {
    padding: 36px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    background: linear-gradient(to left, #130160, #36353c);
  }
  .logout-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logout-section > img {
    cursor: pointer;
  }
`;
