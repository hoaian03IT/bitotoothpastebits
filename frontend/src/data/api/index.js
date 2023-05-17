import axios from "axios";

export const loginApi = async (payload) => await axios.post(`/user/login`, payload);
export const registerApi = async (payload) => await axios.post(`/user/register`, payload);
export const fetchAccessTokenApi = async (payload) => await axios.post("/user/refresh-token", payload);
