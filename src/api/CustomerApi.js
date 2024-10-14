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
    console.log("data", data);
    sessionStorage.setItem("CustomerProfile", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
  }
};

//function to handle customer logout
export const customerLogout = async () => {
  try {
    const token = sessionStorage.getItem("CustomerProfile")
      ? JSON.parse(sessionStorage.getItem("CustomerProfile")).token
      : null;
    const response = await fetch(`${API_URL}/customers/logout`, {
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
    sessionStorage.removeItem("CustomerProfile");
    return true;
  } catch (error) {
    console.error("Logout failed : ", error);
    return false;
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
  console.log("customer-profile", response);
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
    //get the customer's customerProfileId from sessionStorage
    const CustomerProfile = JSON.parse(
      sessionStorage.getItem("CustomerProfile")
    );
    const customerProfileId = CustomerProfile.customerProfileId;

    if (!CustomerProfile || !customerProfileId) {
      throw new Error("Customer Profile not found");
    }

    const payload = {
      userId: customerProfileId,
      name: createServiceData.customerName,
      contact: createServiceData.contact,
      service_requested: createServiceData.serviceCategory,
      description: createServiceData.description,
      requestedDate: createServiceData.dateRequested,
      requestedTime: createServiceData.timeRequested,
      address: createServiceData.address,
      estimatedDuration: createServiceData.duration,
      price: createServiceData.price,
      status: createServiceData.status,
    };
    console.log("create service", createServiceData);

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
    console.log("service data", data);
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

//fetching service requests created by particular customer
export const getServiceRequestsByCustomer = async (userId) => {
  try {
    const response = await fetch(
      `${API_URL}/customers/getServiceRequestsByCustomer/${userId}`,
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
      status: updateServiceData.status,
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

//action required by customer
//fetch accepted service requests for the customer
export const fetchAllAcceptedServiceRequests = async (customerId) => {
  try {
    const response = await fetch(
      `${API_URL}/fetchAllAcceptedServiceRequests/${customerId}`,
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
    console.error("Error fetching accepted service requests:", error);
    throw error;
  }
};

//function to call API for accepting a worker job posting by a customer
export const acceptJobPosting = async (customerId, jobListingId) => {
  try {
    const response = await fetch(`${API_URL}/accept/byCustomer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, jobListingId }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Job Posting  accepted successfully:", data);
      // Update the UI or state based on the successful response
    } else {
      console.error("Error accepting Job Posting:", data.msg);
    }
  } catch (error) {
    console.error("Error making API request:", error);
  }
};
