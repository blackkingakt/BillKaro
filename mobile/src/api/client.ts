import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import * as Keychain from 'react-native-keychain';
import { API_CONFIG } from '../constants';

// Create axios instance
const api: AxiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - add auth token
api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials && credentials.password) {
                config.headers.Authorization = `Bearer ${credentials.password}`;
            }
        } catch (error) {
            console.log('Error getting credentials:', error);
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor - handle errors
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        // Handle 401 Unauthorized - try to refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Get refresh token from secure storage
                const refreshCredentials = await Keychain.getGenericPassword({ service: 'refreshToken' });

                if (refreshCredentials && refreshCredentials.password) {
                    // Call refresh token endpoint
                    const response = await axios.post(`${API_CONFIG.BASE_URL}/auth/refresh-token`, {
                        refreshToken: refreshCredentials.password,
                    });

                    const { accessToken, refreshToken: newRefreshToken } = response.data.data;

                    // Store new tokens
                    await Keychain.setGenericPassword('accessToken', accessToken);
                    await Keychain.setGenericPassword('refreshToken', newRefreshToken, { service: 'refreshToken' });

                    // Retry original request
                    if (originalRequest.headers) {
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    }
                    return api(originalRequest);
                }
            } catch (refreshError) {
                // Refresh failed - clear tokens and redirect to login
                await Keychain.resetGenericPassword();
                await Keychain.resetGenericPassword({ service: 'refreshToken' });
                // Navigation to login will be handled by the auth state
            }
        }

        return Promise.reject(error);
    }
);

export default api;
