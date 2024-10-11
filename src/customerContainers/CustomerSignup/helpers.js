export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleSignUp = (customerMutation, formData, navigate) => {
  customerMutation.mutate(formData);

  navigate("/customer-homescreen");
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleLogin = (navigate) => {
  navigate("/login/customer");
};