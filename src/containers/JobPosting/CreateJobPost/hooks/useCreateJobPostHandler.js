import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createJobPost } from "../../../../api/WorkerApi";

export const useCreateJobPostHandler = () => {
  const navigate = useNavigate();

  const jobPostMutation = useMutation({
    mutationFn: (createJobData) => createJobPost(createJobData),
    onSuccess: (data) => {
      console.log("Job post created successfully:", data);
      navigate("/showJobPost");
    },
    onError: (error) => {
      console.log("job post failed ", error);
    },
  });

  return jobPostMutation;
};
