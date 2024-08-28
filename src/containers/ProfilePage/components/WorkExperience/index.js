import React from "react";
import backArrow from "../../../../assets/backArrow.png";
import Buttons from "../../../../reusableComponents/Buttons";
import Inputs from "../../../../reusableComponents/Inputs";
import { colors } from "../../../../Constants/colors";
import { StyledWorkExperience } from "./style";

const WorkExperience = () => {
  return (
    <StyledWorkExperience>
      <img src={backArrow} alt="backArrow" className="back-arrow" />
      <h2 className="work-title">Add work experience</h2>
      <div>
        <Inputs
          type="text"
          label="Job-title"
          name="Job-title"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Description"
          name="Description"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
      </div>

      <Buttons
        label="SAVE"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        className="save-btn"
      />
    </StyledWorkExperience>
  );
};

export default WorkExperience;
