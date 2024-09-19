
const BASE_URL = "http://localhost:5000";

const apiService = async (endpoint, method = 'GET', body = null, headers = {}) => {
 
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Construct the full URL
  const url = `${BASE_URL}${endpoint}`;

  // Set up the request options
  const options = {
    method,
    headers: defaultHeaders,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong!');
    }

    // Parse the response data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error; // Propagate the error for handling in the component
  }
};

// GET request
const get = (endpoint, headers = {}) => {
  return apiService(endpoint, 'GET', null, headers);
};

// POST request
const post = (endpoint, body, headers = {}) => {
  return apiService(endpoint, 'POST', body, headers);
};

// PUT request
const put = (endpoint, body, headers = {}) => {
  return apiService(endpoint, 'PUT', body, headers);
};

// DELETE request
const del = (endpoint, headers = {}) => {
  return apiService(endpoint, 'DELETE', null, headers);
};

// Exporting the methods
export default {
  get,
  post,
  put,
  delete: del,
};
