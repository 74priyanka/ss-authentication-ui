import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerLogin } from "../../../api/WorkerApi";
import { customerLogin } from "../../../api/CustomerApi";

const useLoginHandler = () => {
  // Custom hook definition
  const location = useLocation();
  const navigate = useNavigate();
  const { userType } = useParams();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Create mutations for each user type
  const workerMutation = useMutation({
    mutationFn: (credentials) => workerLogin(credentials),
    onSuccess: (data) => {
      console.log("Worker login successful:", data);
      navigate("/homescreen");
    },
    onError: (error) => {
      console.log("Worker login failed:", error);
    },
  });

  const customerMutation = useMutation({
    mutationFn: (credentials) => customerLogin(credentials),
    onSuccess: (data) => {
      console.log("Customer login successful:", data);
      navigate("/homescreen");
    },
    onError: (error) => {
      console.log("Customer login failed:", error);
    },
  });

  // Select the appropriate mutation based on userType
  let mutation;
  switch (userType) {
    case "worker":
      mutation = workerMutation;
      break;
    case "customer":
      mutation = customerMutation;
      break;

    default:
      console.error("Invalid user type");
      mutation = null;
      break;
  }

  return {
    navigate,
    formData,
    setFormData,
    mutation,
    userType,
  };
};

export default useLoginHandler;
