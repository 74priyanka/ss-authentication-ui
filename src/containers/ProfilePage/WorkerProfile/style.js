import styled from "styled-components";
import { colors } from "../../../Constants/colors";

export const StyledWorkerProfile = styled.div`
  background-color: ${colors.secondary};

  .profile-page__header {
    padding: 36px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    background: linear-gradient(to left, #130160, #36353c);
  }
`;
