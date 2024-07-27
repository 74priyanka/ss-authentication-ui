import React from "react";
import { StyledCheckEmail } from "./style";
import emailImage from "../../assets/email_check_img.png";
import Buttons from "../../reusableComponents/Buttons";

const CheckEmail = () => {
  return (
    <StyledCheckEmail className="styled-check-email">
      <div className="check-email">
        <h1>Check Your Email</h1>
        <p style={{ textAlign: "center" }}>
          We have sent the reset password to the email address
          brandonelouis@gmial.com
        </p>
        <img src={emailImage} alt="" className="email-img" />

        <Buttons
          label="OPEN YOUR EMAIL"
          labelColor="white"
          backgroundColor="#130160"
        />
        <Buttons
          label="BACK TO LOGIN"
          labelColor="#130160"
          backgroundColor="#d6cdfe"
        />

        <p>
          You have not received the email? <span>Resend</span>
        </p>
      </div>
    </StyledCheckEmail>
  );
};

export default CheckEmail;
