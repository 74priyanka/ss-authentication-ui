import React from "react";
import profilePic from "../../../assets/profilePic.png";
import ProfileCardData from "../../../reusableComponents/ProfileCardData";
import { cardData } from "../../../Constants/profileContent";
import { StyledWorkerProfile } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkerUserProfileData } from "../../../api/WorkerApi";
import Buttons from "../../../reusableComponents/Buttons";
import { colors } from "../../../Constants/colors";
import { useNavigate } from "react-router-dom";
import { workerLogout } from "../../../api/WorkerApi";
import homescreen from "../../../assets/homescreen.png";

const WorkerProfile = () => {
  const navigate = useNavigate();
  // Retrieve the profile ID from session storage
  const profileData = sessionStorage.getItem("profile"); // Assuming it's stored as a string
  const profileId = JSON.parse(profileData).profileId;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profileData", profileId], // Include profileId in the query key
    queryFn: () => fetchWorkerUserProfileData(profileId), // Pass profileId to the fetch function
    enabled: !!profileId, // Ensure the query runs only if profileId exists
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Assuming the data is an object for a single profile
  const profileName = data?.userName || "No Name Available";

  const handleLogout = async () => {
    const isLoggedOut = await workerLogout();
    if (isLoggedOut) {
      navigate("/login/worker");
    } else {
      console.error("Logout failed.Please try again");
    }
  };

  const handleHome = () => {
    navigate("/homescreen");
  };

  return (
    <StyledWorkerProfile>
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
        <p>California, USA</p>
      </div>
      <div className="profile-content">
        {cardData.map((card) => (
          <ProfileCardData
            key={card.title} // Add a key prop for each item
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
