import axios from 'axios';
import Cookies from 'js-cookie'; // To access the CSRF cookie

const axiosInstance = axios.create({
  baseURL: 'http://54.158.143.81/api/',
  withCredentials: true, // Ensures cookies are sent with requests
});

// Add CSRF token to all requests
axiosInstance.interceptors.request.use((config) => {
  const csrfToken = Cookies.get('csrftoken'); // Reads the CSRF cookie
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken; // Add CSRF token to headers
  }
  return config;
});

export default axiosInstance;
