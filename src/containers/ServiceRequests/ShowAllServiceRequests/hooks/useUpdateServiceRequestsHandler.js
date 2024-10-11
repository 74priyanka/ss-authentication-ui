import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateServiceRequests } from "../../../../api/CustomerApi";

export const useUpdateServiceRequestsHandler = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ serviceId, updateServiceData }) =>
      updateServiceRequests(serviceId, updateServiceData),
    onSuccess: () => {
      queryClient.invalidateQueries("serviceRequests");
    },
    onError: (error) => {
      console.error("Error updating service requests", error);
    },
  });
};
