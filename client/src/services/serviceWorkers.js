import Axios from 'axios';

const BASE_URL = "https://event-management-o02q.onrender.com/api";

// REGISTER
export const createUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/register`, userDetails);
    const response = task.data;
    return response;
}

// LOGIN
export const getUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/login`, userDetails);
    const response = task.data;
    return response;
}

// TOKEN VERIFICATION
export const userVerify = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/user_verify`, userDetails);
    const response = task.data;
    return response;
}

// GET EVENT
export const getEvents = async (filters = {}) => {
    const query = new URLSearchParams(filters).toString(); // Convert filters to query string
    const task = await Axios.get(`${BASE_URL}/event?${query}`);
    const response = task.data;
    return response;
};

// ADD NEW EVENT
export const addEvent = async (eventDetails) => {
    const task = await Axios.post(`${BASE_URL}/event/add-event`, eventDetails);
    const response = task.data;
    return response;
}

export const joinEvent = async (eventId) => {
    const task = await Axios.post(`${BASE_URL}/event/join/${eventId}`);
    const response = task.data;
    return response;
};
