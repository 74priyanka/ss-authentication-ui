export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleLogin = async (workerMutation, formData, navigate) => {
  await workerMutation.mutate(formData);
  console.log("handle login : ");
  navigate("/homescreen");
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleSignUp = (navigate) => {
  navigate("/signup/worker");
};
