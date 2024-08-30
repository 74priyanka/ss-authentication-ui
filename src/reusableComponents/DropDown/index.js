import React from "react";
import { StyledDropDown } from "./style";
import { jobCategories } from "../../Constants/jobCategories";

const DropDown = ({ dropDownLabel, setDropDownLabel }) => {
  const handleChange = (event) => {
    console.log("dropdown", event.target.value);
    setDropDownLabel(event.target.value);
  };

  return (
    <StyledDropDown>
      <label htmlFor="jobCategories">Choose a category:</label>
      <select
        name="jobCategories"
        id="jobCategories"
        onChange={handleChange}
        value={dropDownLabel}
      >
        <option value="">Select an option</option>
        {jobCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </StyledDropDown>
  );
};

export default DropDown;
