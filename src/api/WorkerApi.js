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
    console.log("worker data", data);
    sessionStorage.setItem("profile", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error(error);
  }
};

//
export const fetchWorkerUserProfileData = async (profileId) => {
  const response = await fetch(`${API_URL}/workers/profile/${profileId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

//function to handle worker logout
export const workerLogout = async () => {
  try {
    const token = sessionStorage.getItem("profile")
      ? JSON.parse(sessionStorage.getItem("profile")).token
      : null;
    const response = await fetch(`${API_URL}/workers/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    //clear the session storage
    sessionStorage.removeItem("profile");

    return true;
  } catch (error) {
    console.error("Logout failed: ", error);
    return false;
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

//handling profiles
export const fetchWorkerProfileData = async () => {
  try {
    const response = await fetch(`${API_URL}/workers/getProfile`, {
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
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

//handle create job post

export const createJobPost = async (createJobData) => {
  try {
    //get the worker's profileId from sessionStorage
    const profile = JSON.parse(sessionStorage.getItem("profile"));

    if (!profile || !profile.profileId) {
      throw new Error("worker is not logged in");
    }

    //prepare the payload for creatingJobListing including the profileId as userId
    const payload = {
      category: createJobData.dropDownLabel,
      service_availability_duration: createJobData.time,
      date: createJobData.date,
      price: createJobData.price,
      job_description: createJobData.description,
      userId: profile.profileId, //from sessionStorage
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
    console.log("Job post created successfully:", data);
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

//fetching job listings created by a specific worker
export const getJobListingsByWorker = async (userId) => {
  try {
    const response = await fetch(
      `${API_URL}/workers/getJobListingByWorker/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching job listings by worker:", error);
    throw error;
  }
};

export const updateJobListings = async (id, updateJobData) => {
  try {
    const payload = {
      category: updateJobData.dropDownLabel,
      service_availability_duration: updateJobData.time,
      date: updateJobData.date,
      price: updateJobData.price,
      job_description: updateJobData.description,
    };
    console.log("Payload sent to API:", payload);

    const response = await fetch(`${API_URL}/workers/updateJobListing/${id}`, {
      method: "PUT",
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
    console.error("Error updating job listings:", error);
    throw error;
  }
};

export const deleteJobListings = async (id) => {
  try {
    const response = await fetch(`${API_URL}/workers/deleteJobListing/${id}`, {
      method: "DELETE",
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
    console.error("Error deleting job listings:", error);
    throw error;
  }
};
