import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createServiceRequests } from "../../../../api/CustomerApi";

export const useCreateServiceRequestsHandler = () => {
  const navigate = useNavigate();

  const serviceRequestsMutation = useMutation({
    mutationFn: (createServiceData) => createServiceRequests(createServiceData),
    onSuccess: (data) => {
      console.log("service request created", data);
      navigate("/showServiceRequests");
    },
    onError: (error) => {
      console.log("service request failed ", error);
    },
  });

  return serviceRequestsMutation;
};
