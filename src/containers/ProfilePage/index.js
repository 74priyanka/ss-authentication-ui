import React from "react";
import profilePic from "../../assets/profilePic.png";
import ProfileCardData from "../../reusableComponents/ProfileCardData";
import { cardData } from "../../Constants/profileContent";
import { StyledProfilePage } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchProfileData } from "../../api/WorkerApi";

const ProfilePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: fetchProfileData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Assuming the data is an array of profiles
  const profileName = data[0]?.name || "No Name Available";
  return (
    <StyledProfilePage>
      <div className="profile-page__header">
        <img src={profilePic} alt="" />
        <p className="profile-name">{profileName}</p>
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
