import React from "react";
import { StyledEducation } from "./style";
import backArrow from "../../../../assets/backArrow.png";
import Buttons from "../../../../reusableComponents/Buttons";
import Inputs from "../../../../reusableComponents/Inputs";
import { colors } from "../../../../Constants/colors";

const Education = () => {
  return (
    <StyledEducation>
      <img src={backArrow} alt="backArrow" className="back-arrow" />
      <h2 className="education-title">Add Education</h2>
      <div>
        <Inputs
          type="text"
          label="Level of education"
          name="Level of education"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Institution name"
          name="Institution name"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Field of study"
          name="Field of study"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <div>
          <Inputs
            type="text"
            label="Start date"
            name="Start date"
            labelColor={colors.input_label_text}
            inputColor={colors.input_label_text}
            backgroundColor={colors.input_bg}
          />
          <Inputs
            type="text"
            label="End date"
            name="End date"
            labelColor={colors.input_label_text}
            inputColor={colors.input_label_text}
            backgroundColor={colors.input_bg}
          />
        </div>
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
    </StyledEducation>
  );
};

export default Education;
