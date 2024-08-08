import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { workerLogin } from "../../../api/WorkerApi";
import { customerLogin } from "../../../api/CustomerApi";

const useLoginHandler = () => {
  //this is custom hook , hook filename should be start with "use"  keyword we can define functions and react states here
  //hook can be called only in react component or hooks and it cannot be called in function
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: (credentials) => customerLogin(credentials),
    onSuccess: (data) => {
      console.log("login successful :", data);
      navigate("/launch");
    },
    onError: (error) => {
      console.log("login failed :", error);
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

export default useLoginHandler;
