import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const StyledServiceRequestsCard = styled.div`
  border: 2px solid ${colors.border || "#e0e0e0"};
  position: relative;
  padding: 38px;
  margin: 16px;
  border-radius: 20px;
  background-color: ${colors.cardBackground || "#fff"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    border-color: ${colors.secondary_btn_bg};
  }

  /* Card Header */
  .service-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .service-card-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${colors.primary || "#674188"};
    margin: 0;
    text-align: left;
  }

  .options-menu {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    padding: 10px;
    z-index: 10;
  }

  .options {
    cursor: pointer;
  }

  .options-menu img {
    cursor: pointer;
    margin: 0 5px;
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
      transform: scale(1.1);
      filter: brightness(1.2);
    }
  }

  /* Card Body */
  .service-card-body {
    p {
      font-size: 1.1rem;
      background-color: ${colors.secondary_btn_bg || "#fff5f5"};
      color: ${colors.text || "#333"};
      line-height: 1.6;

      text-align: left;

      padding: 12px;

      border-radius: 8px;
    }

    .service-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .service-info span {
      background-color: ${colors.secondary_btn_bg || "#fff5f5"};
      border-radius: 8px;
      padding: 8px;
      font-size: 1rem;
      text-align: center;
    }
  }

  /* Card Footer */
  .service-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding-top: 8px;
    border-top: 1px solid ${colors.border || "#e0e0e0"};

    .service-price {
      font-size: 1.3rem;
      font-weight: bold;
      color: ${colors.secondary || "#FF8C00"};
    }

    .service-status {
      font-size: 1rem;
      padding: 6px 12px;
      border-radius: 12px;
      background-color: ${(props) =>
        props.status === "Completed" ? "#4caf50" : "#f44336"};
      color: #fff;
      font-weight: 500;
      text-align: center;
    }
  }

  /* Responsiveness for breakpoints */
  @media (max-width: 1024px) {
    padding: 28px;

    .service-card-title {
      font-size: 1.6rem;
    }

    .service-card-body {
      font-size: 1rem;
    }

    .service-info {
      grid-template-columns: 1fr;
    }

    .service-card-footer {
      flex-direction: column;
      gap: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    .service-card-title {
      font-size: 1.4rem;
    }

    .service-card-body p {
      font-size: 0.95rem;
    }

    .service-info {
      grid-template-columns: 1fr;
    }

    .service-card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    .service-card-title {
      font-size: 1.2rem;
    }

    .service-card-body {
      font-size: 0.9rem;
    }

    .service-info {
      display: block;
    }

    .service-card-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
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
