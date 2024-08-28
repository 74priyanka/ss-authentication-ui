import React, { useState } from "react";
import { StyledDropDown } from "./style";

const DropDown = ({
  label,
  options,
  onSelect,
  bgColor,
  textColor,
  labelColor,
  arrowColor,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => setOpen(!open);
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setOpen(false);
  };

  return (
    <StyledDropDown>
      {label && (
        <label labelColor={labelColor} className="label">
          {label}
        </label>
      )}
      <div className="drop-down-wrapper">
        <div
          type="text"
          //   value={selectedOption}
          //   readOnly
          onClick={handleToggle}
          style={{ backgroundColor: bgColor, color: textColor }}
          //   bgColor={bgColor}
          //   textColor={textColor}
          //   placeholder="Select Category"
          className="drop-down-input"
        >
          {" "}
          {selectedOption || "Select Category"}
        </div>
        <div
          arrowColor={arrowColor}
          className="drop-down-arrow"
          style={{ color: arrowColor }}
        >
          ▼
        </div>
      </div>

      {open && (
        <div className="drop-down-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="drop-down-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </StyledDropDown>
  );
};

export default DropDown;
