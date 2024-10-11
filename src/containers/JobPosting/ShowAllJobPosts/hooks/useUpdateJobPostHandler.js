import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJobListings } from "../../../../api/WorkerApi";

export const useUpdateJobPostHandler = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ jobId, updateJobData }) =>
      updateJobListings(jobId, updateJobData),
    onSuccess: () => {
      queryClient.invalidateQueries("jobListings"); // Invalidate the job listings to refresh the data
      queryClient.refetchQueries("jobListings");
    },
    onError: (error) => {
      console.error("Error updating job post:", error);
    },
  });
};
