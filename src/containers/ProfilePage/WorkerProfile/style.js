import styled from "styled-components";
import { colors } from "../../../Constants/colors";

export const StyledWorkerProfile = styled.div`
  background-color: #f4f6ff;

  .profile-page__header {
    padding: 36px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    background: linear-gradient(to left, #7a5eb3, #110c2d);
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
