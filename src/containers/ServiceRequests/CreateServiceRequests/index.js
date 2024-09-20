import React, { useState, useEffect } from "react";
import Buttons from "../../../reusableComponents/Buttons";
import Inputs from "../../../reusableComponents/Inputs";
import { colors } from "../../../Constants/colors";
import Remove from "../../../assets/Remove.png";
import { StyledCreateServiceRequests } from "./style";
import DropDown from "../../../reusableComponents/DropDown";
import TimePicker from "../../../reusableComponents/TimePicker";
import DatePicker from "../../../reusableComponents/DatePicker";
import { useCreateServiceRequestsHandler } from "./hooks/useCreateServiceRequestsHandler";
import { useUpdateServiceRequestsHandler } from "../ShowServiceRequests/hooks/useUpdateServiceRequestsHandler";
import { useNavigate, useLocation } from "react-router-dom";

const CreateServiceRequests = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state?.service;

  // State variables for form fields
  const [name, setName] = useState(service?.name || "");
  const [contact, setContact] = useState(service?.contact || "");
  const [serviceCategory, setServiceCategory] = useState(
    service?.service_requested || "Select Service"
  );
  const [description, setDescription] = useState(service?.description || "");
  const [dateRequested, setDateRequested] = useState(
    service?.requestedDate
      ? new Date(service.requestedDate).toISOString().split("T")[0]
      : "yyyy-mm-dd"
  );
  const [timeRequested, setTimeRequested] = useState(
    service?.requestedTime || "00:00"
  );
  const [address, setAddress] = useState(service?.address || "");
  const [duration, setDuration] = useState(
    service?.estimatedDuration || "00:00"
  );
  const [price, setPrice] = useState(service?.price || 0);

  // Mutation hooks
  const serviceRequestsMutation = useCreateServiceRequestsHandler();
  const updateServiceRequestsMutation = useUpdateServiceRequestsHandler();

  const handleSave = async () => {
    // Map state variables to backend keys
    const dataSendToBackend = {
      customerName: name,
      contact: contact,
      serviceCategory: serviceCategory,
      description: description,
      dateRequested: dateRequested,
      timeRequested: timeRequested,
      address: address,
      duration: duration,
      price: price,
    };

    try {
      if (service) {
        // Update service request if service exists
        await updateServiceRequestsMutation.mutateAsync({
          serviceId: service._id,
          updateServiceData: dataSendToBackend,
        });
      } else {
        // Create new service request
        await serviceRequestsMutation.mutateAsync(dataSendToBackend);
      }
      navigate("/showServiceRequests");
    } catch (error) {
      console.error("Error creating service request:", error);
    }
  };

  const handleCancel = () => {
    setName("");
    setContact("");
    setServiceCategory("Select Service");
    setDescription("");
    setDateRequested("yyyy-mm-dd");
    setTimeRequested("00:00");
    setAddress("");
    setDuration("00:00");
    setPrice(0);
  };

  return (
    <StyledCreateServiceRequests className="create-service-request">
      <div className="create-service-request-header">
        <img src={Remove} alt="Remove Icon" />
        <h2>
          {service ? "Edit Service Request" : "Create New Service Request"}
        </h2>
      </div>
      <div className="input containers">
        <Inputs
          label="Customer Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          labelColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          label="Contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          labelColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <DropDown
          name="serviceCategory"
          dropDownLabel={serviceCategory}
          setDropDownLabel={setServiceCategory}
        />
        <Inputs
          label="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          labelColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <Inputs
          label="Price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          labelColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <TimePicker
          name="timeRequested"
          time={timeRequested}
          setTime={setTimeRequested}
        />
        <DatePicker
          name="dateRequested"
          date={dateRequested}
          setDate={setDateRequested}
        />
        <Inputs
          label="Duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          labelColor={colors.input_label_text}
          backgroundColor={colors.input_bg}
        />
        <textarea
          name="description"
          rows="4"
          cols="50"
          placeholder="Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
    </StyledCreateServiceRequests>
  );
};

export default CreateServiceRequests;