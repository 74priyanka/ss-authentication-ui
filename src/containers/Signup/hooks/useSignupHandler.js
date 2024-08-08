import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerSignup } from "../../../api/WorkerApi";
import { customerSignup } from "../../../api/CustomerApi";

const useSignupHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: (credentials) => customerSignup(credentials),
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      navigate("/launch");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });

  return {
    location,
    navigate,
    formData,
    setFormData,
    mutation,
  };
};

export default useSignupHandler;
