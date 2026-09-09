/**
 * Centralized API configuration and endpoint registry.
 * - In local development: defaults to http://localhost:8000
 * - In production on Vercel: defaults to '' (same-origin relative paths)
 * - Or reads explicit VITE_API_BASE_URL if set in environment.
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL !== undefined
    ? import.meta.env.VITE_API_BASE_URL
    : (import.meta.env.PROD ? '' : 'http://localhost:8000');

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  HEALTH: `${API_BASE_URL}/health`,
  CHAT: `${API_BASE_URL}/api/chat`,
};
