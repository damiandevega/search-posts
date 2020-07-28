import fetchApi from './helpers/fetchApi';

export const getPosts = () => {
  return fetchApi('get', '/posts');
};
