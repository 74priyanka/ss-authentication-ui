export const handleInputChange = (e, setFormData) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const handleSignUp = (mutation, formData) => {
  mutation.mutate(formData);
};

export const handleForgotPassword = (navigate) => {
  navigate("/forgotPage");
};

export const handleLogin = (location, navigate) => {
  let welcomeText = "";

  if (location.state?.signupTitle === "Create an Account as a Customer") {
    welcomeText = "Quality Service at Your Doorstep: Book a Worker";
  } else if (location.state?.signupTitle === "Create an Account as a Worker") {
    welcomeText = "Empower Your Skills: Join as a Worker";
  }

  navigate("/login", { state: { welcomeText } });
};
