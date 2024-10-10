import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { customerSignup } from "../../../api/CustomerApi";

const useSignupHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const customerMutation = useMutation({
    mutationFn: (credentials) => customerSignup(credentials),
    onSuccess: (data) => {
      console.log("customer signup successful:", data);
      navigate("/customer-homescreen");
    },
    onError: (error) => {
      console.error("customer signup failed:", error);
    },
  });

  return {
    navigate,
    formData,
    setFormData,
    customerMutation,
  };
};

export default useSignupHandler;
