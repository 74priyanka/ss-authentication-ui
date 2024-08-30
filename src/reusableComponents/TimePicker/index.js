import React from "react";
import { StyledTimePicker } from "./style";

const TimePicker = ({ setTime, time }) => {
  const handleChange = (event) => {
    console.log("child time picker", event.target.value);
    setTime(event.target.value);
  };

  return (
    <StyledTimePicker>
      <label for="appt">Select a time:</label>
      <input
        type="time"
        id="appt"
        name="appt"
        onChange={handleChange}
        value={time}
      />
    </StyledTimePicker>
  );
};

export default TimePicker;
