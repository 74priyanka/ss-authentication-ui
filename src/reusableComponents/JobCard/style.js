import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledJobCard = styled.div`
  border: 2px solid ${colors.border || "#e0e0e0"};
  margin: 28px;
  padding: 10px;
  background-color: ${colors.cardBackground || "#fff"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  border-radius: 20px;
  position: relative; /* Required for absolute positioned children */
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border-color: ${colors.secondary_btn_bg};
  }

  /* Header Styles */
  .job-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
  }

  /* Body Styles */
  .job-card-body {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap; /* Allows items to wrap on smaller screens */
  }

  .job-card-body > p {
    background: ${colors.secondary_btn_bg};
    border-radius: 8px;
    padding: 8px;
    flex: 1 1 100%; /* Default to full width */
    text-align: center; /* Center text for better appearance on small screens */
    margin: 4px; /* Add margin for spacing */
  }

  /* Options Menu */
  .options-menu {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex; /* Change to flex */
    flex-direction: row; /* Arrange items horizontally */
    padding: 10px;
    z-index: 10;
  }
  .options {
    cursor: pointer;
  }

  .options-menu {
    display: flex;
    gap: 16px;

    img {
      cursor: pointer;
      transition: transform 0.2s ease, filter 0.2s ease;
      margin: 0 5px; /* Adjust horizontal margin */

      &:hover {
        transform: scale(1.1);
        filter: brightness(1.2);
      }
    }
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .job-card-body {
      flex-direction: column; /* Stack items vertically on smaller screens */
      align-items: flex-start; /* Align items to the start */
    }

    .job-card-body > p {
      flex: 1 1 auto; /* Allow to shrink on smaller screens */
      width: 96%; /* Full width on smaller screens */
      text-align: left; /* Align text to the left */
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .job-card-body > p {
      flex: 1 1 45%; /* Allow 2 items per row */
      margin: 10px; /* Add some margin between items */
    }
  }

  @media (min-width: 1025px) {
    .job-card-body > p {
      flex: 1 1 30%; /* Allow 3 items per row */
    }
  }

  .action {
    border: none;
    border-radius: 8px;
    font-size: 16px;
    padding: 10px;
    width: 84%;
    max-width: 400px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
