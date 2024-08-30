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

//handle create job post

export const createJobPost = async (createJobData) => {
  try {
    const payload = {
      category: createJobData.dropDownLabel,
      service_availability_duration: createJobData.time,
      date: createJobData.date,
      price: createJobData.price,
      job_description: createJobData.description,
      status: "Pending",
    };

    const response = await fetch(`${API_URL}/workers/createJobListing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating job post:", error);
    throw error;
  }
};

export const getJobListings = async () => {
  try {
    const response = await fetch(`${API_URL}/workers/getJobListing`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    throw error;
  }
};
