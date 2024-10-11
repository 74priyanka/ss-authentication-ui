import React, { useState, useEffect } from "react";
import Buttons from "../../../reusableComponents/Buttons";
import Inputs from "../../../reusableComponents/Inputs";
import { colors } from "../../../Constants/colors";
import Remove from "../../../assets/Remove.png";
import { StyledCreateJobPost } from "./style";
import DropDown from "../../../reusableComponents/DropDown";
import TimePicker from "../../../reusableComponents/TimePicker";
import DatePicker from "../../../reusableComponents/DatePicker";
import { useCreateJobPostHandler } from "./hooks/useCreateJobPostHandler";
import { useUpdateJobPostHandler } from "../ShowJobPost/hooks/useUpdateJobPostHandler";
import { useNavigate, useLocation } from "react-router-dom";

const CreateJobPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;
  const [dropDownLabel, setDropDownLabel] = useState(
    job?.category || "select option"
  );
  const [time, setTime] = useState(
    job?.service_availability_duration || "00:00"
  );
  const [date, setDate] = useState(job?.date || "yyyy-mm-dd");
  const [price, setPrice] = useState(job?.price || 0);
  const [description, setDescription] = useState(job?.job_description || "");

  const jobPostMutation = useCreateJobPostHandler();
  const updateJobPostMutation = useUpdateJobPostHandler();

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = async () => {
    console.log("save button clicked");

    //get profileId from sessionStorage
    const profile = JSON.parse(sessionStorage.getItem("profile"));

    if (!profile || !profile.profileId) {
      console.error("User not logged in or profileId missing");
      return;
    }

    const dataSendToBackend = {
      date: date,
      time: time,
      description: description,
      dropDownLabel: dropDownLabel,
      price: price,
      userId: profile.profileId, //include userId from sessionStorage
    };

    try {
      if (job) {
        // Update job post
        await updateJobPostMutation.mutateAsync({
          jobId: job._id,
          updateJobData: dataSendToBackend,
        });
      } else {
        // Create new job post
        await jobPostMutation.mutateAsync(dataSendToBackend);
      }
      // Navigate back to ShowJobPost after successful save
      navigate("/showJobPost");
    } catch (error) {
      console.error("Error during save:", error);
    }
  };

  const handleCancel = () => {
    console.log("cancel button clicked");
    setTime("00:00");
    setDate("yyyy-mm-dd");
    setPrice(0);
    setDescription("");
    setDropDownLabel("select option");

    navigate("/homescreen");
  };

  const handleRemove = () => {
    navigate("/homescreen");
  };

  return (
    <StyledCreateJobPost className="create-job-post">
      <div className="create-job-post__header">
        <img
          src={Remove}
          alt=""
          onClick={handleRemove}
          className="remove-btn"
        />
        <h2 className="create-job-header">
          {job ? "Edit Job" : "Create new Job"}
        </h2>
      </div>
      <div className="input containers">
        <DropDown
          name="Job Categories"
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
