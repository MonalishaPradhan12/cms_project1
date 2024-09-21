const BASE_URL = "http://localhost:5000"; // Update your base URL

const apiService = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const token = localStorage.getItem("accesstoken");
  const refreshToken = localStorage.getItem("refreshtoken");
  
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }), // Add token to headers
    ...headers,
  };

  const url = `${BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: defaultHeaders,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    
    
    // If token is expired or unauthorized, attempt to refresh token
    if (response.status === 403 && refreshToken) {
      console.warn("Access token expired, attempting to refresh...");

      // Refresh the access token
      const newAccessToken = await refreshAccessToken(refreshToken);
      console.log("new token",newAccessToken);
      
      if (newAccessToken) {
        // Save the new token and retry the original request
        localStorage.setItem("accesstoken", newAccessToken);

        const newHeaders = {
          ...defaultHeaders,
          Authorization: `Bearer ${newAccessToken}`, // Update with new token
        };

        const retryOptions = { ...options, headers: newHeaders };
        const retryResponse = await fetch(url, retryOptions);
        console.log("......."+JSON.stringify(retryResponse));
        if (!retryResponse.ok) {
          const errorData = await retryResponse.json();
          throw new Error(errorData.message || "Something went wrong!");
        }

        return await retryResponse.json();
      } else {
        throw new Error("Unable to refresh token, please log in again.");
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong!");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

// Function to refresh the access token using the refresh token
const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await fetch(`${BASE_URL}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    console.log("refreshToken",response);
    
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    return data.accessToken; // Assuming API returns the new access token
  } catch (error) {
    console.error("Failed to refresh access token:", error.message);
    return null;
  }
};

export default {
  get: (endpoint, headers = {}) => apiService(endpoint, "GET", null, headers),
  post: (endpoint, body, headers = {}) =>
    apiService(endpoint, "POST", body, headers),
  put: (endpoint, body, headers = {}) =>
    apiService(endpoint, "PUT", body, headers),
  delete: (endpoint, headers = {}) =>
    apiService(endpoint, "DELETE", null, headers),
};
