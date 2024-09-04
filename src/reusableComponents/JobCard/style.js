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

  .options-menu {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 10px;
    z-index: 10;
  }

  .options-menu img {
    cursor: pointer;
    margin: 5px 0;
  }
`;
