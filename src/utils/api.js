import axios from 'axios'

// Set up a base URL for the API (replace with your actual API base URL)
const API_BASE_URL = 'https://api.example.com'

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Function to handle GET requests
export async function get(endpoint, params = {}) {
  try {
    const response = await api.get(endpoint, { params })
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

// Function to handle POST requests
export async function post(endpoint, data) {
  try {
    const response = await api.post(endpoint, data)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

// Function to handle PUT requests
export async function put(endpoint, data) {
  try {
    const response = await api.put(endpoint, data)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

// Function to handle DELETE requests
export async function del(endpoint) {
  try {
    const response = await api.delete(endpoint)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

// Centralized error handling function
function handleApiError(error) {
  console.error('API Error:', error)
  if (error.response) {
    // Server responded with a status outside 2xx range
    console.error('Response Data:', error.response.data)
    console.error('Status Code:', error.response.status)
  } else if (error.request) {
    // Request was made, but no response received
    console.error('Request Data:', error.request)
  } else {
    // Something else caused an error
    console.error('Error Message:', error.message)
  }
  throw error // Optionally re-throw error for further handling
}
