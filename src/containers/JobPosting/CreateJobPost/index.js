import React, { useState } from "react";
import Buttons from "../../../reusableComponents/Buttons";
import Inputs from "../../../reusableComponents/Inputs";
import { colors } from "../../../Constants/colors";
import Remove from "../../../assets/Remove.png";
import { StyledCreateJobPost } from "./style";
import { jobCategories } from "../../../Constants/jobCategories";
import DropDown from "../../../reusableComponents/DropDown";
import TimePicker from "../../../reusableComponents/TimePicker";
import DatePicker from "../../../reusableComponents/DatePicker";
import { useCreateJobPostHandler } from "./hooks/useCreateJobPostHandler";
import { useNavigate } from "react-router-dom";

const CreateJobPost = () => {
  const navigate = useNavigate();
  const [dropDownLabel, setDropDownLabel] = useState("select option");
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState("yyyy-mm-dd");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const jobPostMutation = useCreateJobPostHandler();

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    console.log("save button clicked");
    const dataSendToBackend = {
      date: date,
      time: time,
      description: description,
      dropDownLabel: dropDownLabel,
      price: price,
    };
    jobPostMutation.mutate(dataSendToBackend, {
      onSuccess: () => {
        navigate("/showJobPost");
      },
      onError: (error) => {
        console.error("Error creating job post:", error);
      },
    });

    console.log("data to be sent to backend", dataSendToBackend);
  };

  const handleCancel = () => {
    console.log("cancel button clicked");
    setTime("00:00");
    setDate("yyyy-mm-dd");
    setPrice(0);
    setDescription("");
    setDropDownLabel("select option");
  };

  return (
    <StyledCreateJobPost className="create-job-post">
      <div className="create-job-post__header">
        <img src={Remove} alt="" />
        <h2>Create new Job</h2>
      </div>
      <div className="input containers">
        <DropDown
          dropDownLabel={dropDownLabel}
          setDropDownLabel={setDropDownLabel}
        />
        <TimePicker setTime={setTime} time={time} />
        <DatePicker setDate={setDate} date={date} />
        <Inputs
          type="number"
          label="Price"
          name="Price"
          labelColor={colors.input_label_text}
          inputColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
          onChange={handlePrice}
          value={price}
        />
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          onChange={handleDescription}
          value={description}
        ></textarea>
      </div>
      <div className="button-container">
        <Buttons
          label="SAVE"
          labelColor={colors.primary_btn_label}
          backgroundColor={colors.primary_btn_bg}
          onClick={handleSave}
        />
        <Buttons
          label="CANCEL"
          labelColor={colors.secondary_btn_label}
          backgroundColor={colors.secondary_btn_bg}
          onClick={handleCancel}
        />
      </div>
    </StyledCreateJobPost>
  );
};

export default CreateJobPost;
