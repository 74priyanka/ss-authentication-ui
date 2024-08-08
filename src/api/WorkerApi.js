const API_URL = "http://localhost:3000";

//function to handle worker login
export const workerLogin = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/workers/login`, {
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

// Function to handle worker signup
export const workerSignup = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/workers/signup`, {
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
