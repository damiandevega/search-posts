import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetchApi = (method, url, data = {}, options = {}) => {
  const httpMethod = method.toLowerCase();

  const hasData = ['post', 'put', 'patch'].indexOf(httpMethod);
  const settings = hasData ? options : data;

  const request = hasData
    ? axiosInstance[httpMethod](url, data, settings)
    : axiosInstance[httpMethod](url, settings);

  return request;
};

export default fetchApi;
