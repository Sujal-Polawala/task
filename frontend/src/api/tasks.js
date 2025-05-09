// api/taskApi.js
import axios from 'axios';
import API_BASE_URL from '../config/apiConfig';

export const getMyTasks = async (token) => {
  const res = await axios.get(`${API_BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getTaskById = async (id, token) => {
  const res = await axios.get(`${API_BASE_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createTask = async (taskData, token) => {
  const res = await axios.post(`${API_BASE_URL}/tasks`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateTask = async (id, taskData, token) => {
  const res = await axios.put(`${API_BASE_URL}/tasks/${id}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteTask = async (id, token) => {
  const res = await axios.delete(`${API_BASE_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
