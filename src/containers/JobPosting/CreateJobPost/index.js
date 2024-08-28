import React from "react";
import Buttons from "../../../reusableComponents/Buttons";
import Inputs from "../../../reusableComponents/Inputs";
import { colors } from "../../../Constants/colors";
import Remove from "../../../assets/Remove.png";
import { StyledCreateJobPost } from "./style";
import { jobCategories } from "../../../Constants/jobCategories";
import DropDown from "../../../reusableComponents/DropDown";

const CreateJobPost = () => {
  const handleCategorySelect = (selectedCategory) => {
    console.log("Selected Category:", selectedCategory);
  };

  return (
    <StyledCreateJobPost className="create-job-post">
      <div className="create-job-post__header">
        <img src={Remove} alt="" />
        <h2>Create new Job</h2>
      </div>
      <div className="input containers">
        {/* <Inputs
          type="text"
          label="Category"
          name="Category"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        /> */}
        <DropDown
          label="Category"
          options={jobCategories}
          onSelect={handleCategorySelect}
          bgColor={colors.input_bg}
          textColor={colors.input_label_text}
          labelColor={colors.input_label_text}
          arrowColor={colors.input_label_text}
        />
        <Inputs
          type="text"
          label="Time to complete this Job"
          name="Time to complete this Job"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Date-Time"
          name="Date-Time"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Price"
          name="Price"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          type="text"
          label="Job Description"
          name="Job Description"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
      </div>
      <div className="button-container">
        <Buttons
          label="SAVE"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.primary_btn_bg}
        />
        <Buttons
          label="CANCEL"
          labelColor={colors.secondary_btn_label}
          backgroundColor={colors.secondary_btn_bg}
        />
      </div>
    </StyledCreateJobPost>
  );
};

export default CreateJobPost;
