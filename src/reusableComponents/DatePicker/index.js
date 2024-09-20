import React from "react";
import { StyledDatePicker } from "./style";

const DatePicker = ({ setDate, date }) => {
  const handleChange = (event) => {
    console.log("child date picker", event.target.value);
    setDate(event.target.value);
  };
  return (
    <StyledDatePicker>
      <label for="date">Date:</label>
      <input type="date" name="date" onChange={handleChange} value={date} />
    </StyledDatePicker>
  );
};

export default DatePicker;
