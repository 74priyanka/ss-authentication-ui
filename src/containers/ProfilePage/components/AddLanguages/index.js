import React from "react";
import { StyledAddLanguages } from "./style";
import backArrow from "../../../../assets/backArrow.png";
import Buttons from "../../../../reusableComponents/Buttons";
import { colors } from "../../../../Constants/colors";
import Inputs from "../../../../reusableComponents/Inputs";

const AddLanguages = () => {
  return (
    <StyledAddLanguages>
      <img src={backArrow} alt="backArrow" className="back-arrow" />
      <h2 className="Add-Languages-title">Add Languages</h2>
      <Inputs
        type="text"
        labelColor={colors.input_label_text}
        inputColor={colors.input_label_text}
        backgroundColor={colors.input_bg}
      />
      <Buttons
        label="SAVE"
        labelColor={colors.primary_btn_label}
        backgroundColor={colors.primary_btn_bg}
        className="save-btn"
      />
    </StyledAddLanguages>
  );
};

export default AddLanguages;
