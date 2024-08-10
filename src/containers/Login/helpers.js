export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleLogin = (mutation, formData) => {
  mutation.mutate(formData);
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleSignUp = (navigate, userType) => {
  const signupUrl = `/signup/${userType}`;
  navigate(signupUrl);
};
