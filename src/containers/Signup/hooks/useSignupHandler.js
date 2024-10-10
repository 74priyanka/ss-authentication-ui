import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerSignup } from "../../../api/WorkerApi";

const useSignupHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const workerMutation = useMutation({
    mutationFn: (credentials) => workerSignup(credentials),
    onSuccess: (data) => {
      console.log("worker signup successful :", data);
      navigate("/homescreen");
    },
    onError: (error) => {
      console.log("worker signup failed :", error);
    },
  });

  return {
    navigate,
    formData,
    setFormData,
    workerMutation,
  };
};

export default useSignupHandler;
