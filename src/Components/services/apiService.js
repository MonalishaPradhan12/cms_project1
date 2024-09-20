const BASE_URL = "http://localhost:5000"; // Update your base URL

const apiService = async (endpoint, method = 'GET', body = null, headers = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
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
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong!');
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export default {
  get: (endpoint, headers = {}) => apiService(endpoint, 'GET', null, headers),
  post: (endpoint, body, headers = {}) => apiService(endpoint, 'POST', body, headers),
  put: (endpoint, body, headers = {}) => apiService(endpoint, 'PUT', body, headers),
  delete: (endpoint, headers = {}) => apiService(endpoint, 'DELETE', null, headers),
};
