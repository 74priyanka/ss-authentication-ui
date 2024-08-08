const API_URL = "http://localhost:3000";

//function to handle customer login
export const customerLogin = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/customers/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Function to handle customer signup
export const customerSignup = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/customers/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
