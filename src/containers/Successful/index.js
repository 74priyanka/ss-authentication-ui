import React from "react";
import { StyledSuccessful } from "./style";
import successfulImage from "../../assets/successful_img.png";
import Buttons from "../../reusableComponents/Buttons";

const Successful = () => {
  return (
    <StyledSuccessful className="styled-successful">
      <div className="successful">
        <h1>Successfully</h1>
        <p style={{ textAlign: "center" }}>
          Your password has been updated, please change your password regularly
          to avoid this happening
        </p>
        <img src={successfulImage} alt="" className="success-img" />

        <Buttons
          label="CONTINUE"
          labelColor="white"
          backgroundColor="#130160"
        />
        <Buttons
          label="BACK TO LOGIN"
          labelColor="#130160"
          backgroundColor="#d6cdfe"
        />
      </div>
    </StyledSuccessful>
  );
};

export default Successful;
