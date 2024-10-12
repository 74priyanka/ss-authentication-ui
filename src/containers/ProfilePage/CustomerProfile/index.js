import React from "react";
import profilePic from "../../../assets/profilePic.png";
import ProfileCardData from "../../../reusableComponents/ProfileCardData";
import { cardData } from "../../../Constants/profileContent";
import { StyledCustomerProfile } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerUserProfileData } from "../../../api/CustomerApi";
import { useNavigate } from "react-router-dom";
import Buttons from "../../../reusableComponents/Buttons";
import { colors } from "../../../Constants/colors";
import { customerLogout } from "../../../api/CustomerApi";
import homescreen from "../../../assets/homescreen.png";

const CustomerProfile = () => {
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    const isLoggedOut = await customerLogout();
    if (isLoggedOut) {
      navigate("/login/customer");
    } else {
      console.error("Logout failed.Please try again");
    }
  };

  const handleHome = () => {
    navigate("/customer-homescreen");
  };

  return (
    <StyledCustomerProfile>
      <div className="profile-page__header">
        <div className="logout-section">
          <img src={profilePic} alt="" />
          <Buttons
            label="Logout"
            labelColor={colors.secondary_btn_label}
            backgroundColor={colors.secondary_btn_bg}
            onClick={handleLogout}
          />
          <img src={homescreen} alt="" onClick={handleHome} />
        </div>

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
