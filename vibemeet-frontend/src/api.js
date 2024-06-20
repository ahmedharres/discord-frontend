import axios from 'axios';
import { logout } from './shared/utiles/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:9050/api',
    timeout: 5000 // Increased timeout to 5000ms for better reliability
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err); // Corrected 'error' to 'err'
});

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;
    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    };
};

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (exception) {
        checkResponseCode(exception); // Use the function here
        return {
            error: true,
            exception,
        };
    };
};

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (exception) {
        checkResponseCode(exception); // Use the function here
        return {
            error: true,
            exception,
        };
    };
};

export const sendFriendInvitation = async (data) => {
    try {
        return await apiClient.post('/friend-invitation/invite', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    };
};


export const acceptFriendInvitation = async (data) => {
    try {
        return await apiClient.post('/friend-invitation/accept', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    };
    
};
export const rejectFriendInvitation = async (data) => {

    try {
        return await apiClient.post('/friend-invitation/reject', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    };
};