import React from "react";
import profilePic from "../../../assets/profilePic.png";
import ProfileCardData from "../../../reusableComponents/ProfileCardData";
import { cardData } from "../../../Constants/profileContent";
import { StyledWorkerProfile } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkerProfileData } from "../../../api/WorkerApi";

const WorkerProfile = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: fetchWorkerProfileData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Assuming the data is an array of profiles
  const profileName = data[0]?.name || "No Name Available";
  return (
    <StyledWorkerProfile>
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
    </StyledWorkerProfile>
  );
};

export default WorkerProfile;
