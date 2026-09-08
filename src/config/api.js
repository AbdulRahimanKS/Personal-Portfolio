/**
 * Centralized API configuration and endpoint registry.
 * Reads base URL from Vite environment variables (VITE_API_BASE_URL)
 * with a fallback to local development server (http://localhost:8000).
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  HEALTH: `${API_BASE_URL}/health`,
};
