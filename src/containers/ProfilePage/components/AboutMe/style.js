import styled from "styled-components";
import { colors } from "../../../../Constants/colors";

export const StyledAboutMe = styled.div`
  height: 100%;
  background-color: ${colors.secondary};

  .back-arrow {
    margin: 16px;
  }

  .about-title {
    margin: 16px;
    font-size: 24px;
  }

  .about-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-info {
    height: 300px;
    background-color: white;
    border-radius: 10px;
    border: none;
    width: 80%;
    margin: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .save-btn {
  }
`;
