export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleSignUp = (mutation, formData, navigate) => {
  mutation.mutate(formData);
  navigate("/homescreen");
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleLogin = (navigate, userType) => {
  const loginUrl = `/login/${userType}`;
  navigate(loginUrl);
};
