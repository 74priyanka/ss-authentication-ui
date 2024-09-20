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

  // Update state variables to match backend keys
  const [name, setName] = useState(service?.name || "");
  const [contact, setContact] = useState(service?.contact || "");
  const [service_requested, setServiceRequested] = useState(
    service?.service_requested || "Select Service"
  );
  const [description, setDescription] = useState(service?.description || "");
  const [requestedDate, setRequestedDate] = useState(
    service?.requestedDate
      ? new Date(service.requestedDate).toISOString().split("T")[0]
      : "yyyy-mm-dd"
  );
  const [requestedTime, setRequestedTime] = useState(
    service?.requestedTime || "00:00"
  );
  const [address, setAddress] = useState(service?.address || "");
  const [estimatedDuration, setEstimatedDuration] = useState(
    service?.estimatedDuration || "00:00"
  );
  const [price, setPrice] = useState(service?.price || 0);

  const serviceRequestsMutation = useCreateServiceRequestsHandler();
  const updateServiceRequestsMutation = useUpdateServiceRequestsHandler();

  const handleSave = async () => {
    // Ensure that field names match backend keys
    const dataSendToBackend = {
      name: name,
      contact: contact,
      service_requested: service_requested,
      description: description,
      requestedDate: requestedDate,
      requestedTime: requestedTime,
      address: address,
      estimatedDuration: estimatedDuration,
      price: price,
    };

    try {
      if (service) {
        // Update service request
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
    setServiceRequested("Select Service");
    setDescription("");
    setRequestedDate("yyyy-mm-dd");
    setRequestedTime("00:00");
    setAddress("");
    setEstimatedDuration("00:00");
    setPrice(0);
  };

  return (
    <StyledCreateServiceRequests className="create-service-request">
      <div className="create-service-request-header">
        <img src={Remove} alt="" />
        <h2>
          {service ? "Edit Service Request" : "Create new Service Request "}
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
          name="service_requested"
          dropDownLabel={service_requested}
          setDropDownLabel={setServiceRequested}
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
          name="requestedTime"
          time={requestedTime}
          setTime={setRequestedTime}
        />
        <DatePicker
          name="requestedDate"
          date={requestedDate}
          setDate={setRequestedDate}
        />
        <Inputs
          label="Duration"
          name="estimatedDuration"
          value={estimatedDuration}
          onChange={(e) => setEstimatedDuration(e.target.value)}
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
