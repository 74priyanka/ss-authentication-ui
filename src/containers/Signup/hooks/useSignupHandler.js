import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerSignup } from "../../../api/WorkerApi";
import { customerSignup } from "../../../api/CustomerApi";

const useSignupHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userType } = useParams();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  //create mutations for each type

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

  const customerMutation = useMutation({
    mutationFn: (credentials) => customerSignup(credentials),
    onSuccess: (data) => {
      console.log("customer signup successful:", data);
      navigate("/homescreen");
    },
    onError: (error) => {
      console.error("customer signup failed:", error);
    },
  });

  //select the mutation based on userType
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

export default useSignupHandler;
