import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledJobCard = styled.div`
  /* margin: 24px; */
  margin: 28px;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  .job-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
  }

  .job-card-body {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .job-card-body > p {
    background: ${colors.secondary_btn_bg};
    border-radius: 8px;
    padding: 8px;
  }
`;
