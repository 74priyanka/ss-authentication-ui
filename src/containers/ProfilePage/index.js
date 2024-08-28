import React from "react";
import profilePic from "../../assets/profilePic.png";
import ProfileCardData from "../../reusableComponents/ProfileCardData";
import { cardData } from "../../Constants/profileContent";
import { StyledProfilePage } from "./style";

const ProfilePage = () => {
  return (
    <StyledProfilePage>
      <div className="profile-page__header">
        <img src={profilePic} alt="" />
        <p>John Manuel</p>
        <p>California,USA</p>
      </div>
      <div className="profile-content">
        {cardData.map((card) => (
          <ProfileCardData
            image={card.image}
            title={card.title}
            icon={card.icon}
            path={card.path}
          />
        ))}
      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;
