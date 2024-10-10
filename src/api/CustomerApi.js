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
    sessionStorage.setItem("CustomerProfile", JSON.stringify(data));
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

//
export const fetchCustomerUserProfileData = async (profileId) => {
  const response = await fetch(`${API_URL}/customers/profile/${profileId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

//handling profiles
export const fetchCustomerProfileData = async () => {
  try {
    const response = await fetch(`${API_URL}/customers/getCustomerProfile`, {
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

//handle create Service Requests

export const createServiceRequests = async (createServiceData) => {
  try {
    const payload = {
      name: createServiceData.name,
      contact: createServiceData.contact,
      service_requested: createServiceData.service_requested,
      description: createServiceData.description,
      requestedDate: createServiceData.requestedDate,
      requestedTime: createServiceData.requestedTime,
      address: createServiceData.address,
      estimatedDuration: createServiceData.estimatedDuration,
      price: createServiceData.price,
      status: "Pending",
    };

    console.log("payload ....", payload);
    const response = await fetch(`${API_URL}/customers/createServiceRequests`, {
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
    console.error("Error creating service request:", error);
    throw error;
  }
};

//get service requests

export const getServiceRequests = async () => {
  try {
    const response = await fetch(`${API_URL}/customers/getServiceRequests`, {
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
    console.error("Error fetching service requests:", error);
    throw error;
  }
};

//update service requests
export const updateServiceRequests = async (id, updateServiceData) => {
  try {
    const payload = {
      name: updateServiceData.customerName,
      contact: updateServiceData.contact,
      service_requested: updateServiceData.serviceCategory,
      description: updateServiceData.description,
      requestedDate: updateServiceData.dateRequested,
      requestedTime: updateServiceData.timeRequested,
      address: updateServiceData.address,
      estimatedDuration: updateServiceData.duration,
      price: updateServiceData.price,
    };
    console.log("Payload sent to API:", payload);

    const response = await fetch(
      `${API_URL}/customers/updateServiceRequests/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating service requests:", error);
    throw error;
  }
};

//delete service requests

export const deleteServiceRequests = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/customers/deleteServiceRequests/${id}`,
      {
        method: "DELETE",
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
    console.error("Error deleting service requests:", error);
    throw error;
  }
};
