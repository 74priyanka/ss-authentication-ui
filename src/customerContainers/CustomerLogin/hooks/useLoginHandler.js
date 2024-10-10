import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { customerLogin } from "../../../api/CustomerApi";

const useLoginHandler = () => {
  // Custom hook definition
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const customerMutation = useMutation({
    mutationFn: (credentials) => customerLogin(credentials),
    onSuccess: (data) => {
      console.log("Customer login successful:", data);
      navigate("/customer-homescreen");
    },
    onError: (error) => {
      console.log("Customer login failed:", error);
    },
  });

  return {
    navigate,
    formData,
    setFormData,
    customerMutation,
  };
};

export default useLoginHandler;
