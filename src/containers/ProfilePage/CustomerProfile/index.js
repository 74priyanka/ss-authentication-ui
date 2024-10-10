import React from "react";
import profilePic from "../../../assets/profilePic.png";
import ProfileCardData from "../../../reusableComponents/ProfileCardData";
import { cardData } from "../../../Constants/profileContent";
import { StyledCustomerProfile } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerUserProfileData } from "../../../api/CustomerApi";

const CustomerProfile = () => {
  // Retrieve the profile ID from session storage
  const profileData = sessionStorage.getItem("CustomerProfile"); // Assuming it's stored as a string
  console.log("profile data", profileData);
  const profileId = JSON.parse(profileData).customerProfileId;
  console.log("profileid ", profileId);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profileData", profileId], // Include profileId in the query key
    queryFn: () => fetchCustomerUserProfileData(profileId), // Pass profileId to the fetch function
    enabled: !!profileId, // Ensure the query runs only if profileId exists
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Assuming the data is an array of profiles
  const profileName = data?.userName || "No Name Available";
  return (
    <StyledCustomerProfile>
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
    </StyledCustomerProfile>
  );
};

export default CustomerProfile;
