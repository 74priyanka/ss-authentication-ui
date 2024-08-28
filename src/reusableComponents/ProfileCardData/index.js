import React from "react";
import { StyledProfilePage } from "./style";
import { useNavigate } from "react-router-dom";

const ProfileCardData = ({ image, title, icon, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <StyledProfilePage onClick={handleClick}>
      <div className="detail-info">
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
      <img src={icon} alt="icon" />
    </StyledProfilePage>
  );
};

export default ProfileCardData;
