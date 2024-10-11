import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteServiceRequests } from "../../../../api/CustomerApi";

export const useDeleteServiceRequestsHandler = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (serviceId) => deleteServiceRequests(serviceId),
    onSuccess: () => {
      queryClient.invalidateQueries("serviceRequests");
      queryClient.refetchQueries("serviceRequests");
    },
    onError: (error) => {
      console.error("Error deleting service requests:", error);
    },
  });
};
