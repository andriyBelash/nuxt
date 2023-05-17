import axios from 'axios'

export const $api = axios.create({
  domain: 'https://jsonplaceholder.typicode.com',
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'ads',
  },
});

$api.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
$api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
