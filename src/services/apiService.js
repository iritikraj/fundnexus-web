// src/services/apiService.js
import axios from 'axios';
import AppConstants from '../constants/appConstants';
import StorageService from '../services/storageService';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${StorageService.getItem(AppConstants.LOCAL_STORAGE_KEYS.AUTH_TOKEN)}`,
  },
});

// Request interceptor for headers
api.interceptors.request.use(config => {
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem(AppConstants.LOCAL_STORAGE_KEYS.AUTH_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

// HTTP Methods
export const ApiService = {
  get: (endpoint, params = {}) => api.get(endpoint, { params }),
  post: (endpoint, data) => api.post(endpoint, data),
  put: (endpoint, data) => api.put(endpoint, data),
  patch: (endpoint, data) => api.patch(endpoint, data),
  delete: endpoint => api.delete(endpoint),
};