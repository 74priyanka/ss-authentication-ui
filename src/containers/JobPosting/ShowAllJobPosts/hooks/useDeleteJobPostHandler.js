import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJobListings } from "../../../../api/WorkerApi";

export const useDeleteJobPostHandler = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobId) => deleteJobListings(jobId),
    onSuccess: () => {
      queryClient.invalidateQueries("jobListings"); // Invalidate the job listings to refresh the data
      queryClient.refetchQueries("jobListings");
    },
    onError: (error) => {
      console.error("Error deleting job post:", error);
    },
  });
};
