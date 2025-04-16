// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://b991-2405-201-680b-d85b-4922-7af1-ac6a-5b7d.ngrok-free.app/api/v1',
});

export const getTodayTask = async () => {
  const response = await api.get('/task/today');
  return response.data;
};

export const getTodayQuote = async (religion) => {
  const response = await api.get(`/quotes/${religion}/today`);
  return response.data;
};

export const getYesterdayQuote = async (religion) => {
  const response = await api.get(`/quotes/${religion}/yesterday`);
  return response.data;
};
