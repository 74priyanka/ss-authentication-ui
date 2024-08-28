import styled from "styled-components";
import {
  LAYOUT_MEDIA_QUERY_BREAKPOINTS,
  mediaQuery,
} from "../../Constants/breakpoints";
import { colors } from "../../Constants/colors";
export const StyledHomeScreen = styled.div`
  background-color: ${colors.secondary};
  width: calc(100% - 48px);
  height: calc(100% - 24px);
  padding: 12px 24px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    display: flex;
    flex-direction: column;
    color: ${colors.tertiary_text};
  }

  .promotion {
    background-color: ${colors.primary};
    width: 100%;
    border-radius: 10px;
    color: white;
    padding: 4px;
    font-size: 20px;
  }

  .discount {
    margin-left: 28px;
  }

  .promotion-description {
    margin-left: 28px;
  }

  .job-finding-title {
    font-size: 24px;
    color: ${colors.tertiary_text};
  }

  .job-cards {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 3 columns of equal width */
    gap: 4px;
    color: ${colors.tertiary_text};
    font-size: 20px;
  }

  .job-card-1 {
    background-color: #afecfe;
    border-radius: 10px;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    grid-row: span 2;
    line-height: 0.1;
  }
  .job-card-2 {
    background-color: #beaffe;
    border-radius: 10px;
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    line-height: 0.1;
  }
  .job-card-3 {
    background-color: #ffd6ad;
    border-radius: 10px;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    line-height: 0.1;
  }

  .recent-jobs {
    font-size: 24px;
  }

  .job-list {
    display: flex;
    margin: 8px;
    border-radius: 16px;
    width: 100%;
    background-color: white;
  }
  .Nav-items {
    /* display: flex;
    align-items: center;
    justify-content: space-around; */
    width: 100%;
  }

  .nav-items-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background-color: white; */
  }
`;
