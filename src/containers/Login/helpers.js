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

export const handleSignUp = (location, navigate) => {
  let signupTitle = "";
  let signupDescription = "";

  if (
    location.state?.welcomeText ===
    "Quality Service at Your Doorstep: Book a Worker"
  ) {
    signupTitle = "Create an Account as a Customer";
    signupDescription =
      "Experience Quality Service: Create Your Customer Account Today";
  } else if (
    location.state?.welcomeText === "Empower Your Skills: Join as a Worker"
  ) {
    signupTitle = "Create an Account as a Worker";
    signupDescription =
      "Start Your Journey with Us: Create Your Worker Account Today";
  }

  navigate("/signup", { state: { signupTitle, signupDescription } });
};
