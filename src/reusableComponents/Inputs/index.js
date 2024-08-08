import React from "react";
import { StyledInputs } from "./style";

const Inputs = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  labelColor,
  inputColor,
  backgroundColor,
  style,
}) => {
  return (
    <StyledInputs className="input-container" style={style}>
      <label className="input-label" style={{ color: labelColor }}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        style={{ color: inputColor, backgroundColor }}
      />
    </StyledInputs>
  );
};

export default Inputs;
