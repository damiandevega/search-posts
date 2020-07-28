import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  UPDATE_POST,
  UPDATE_POSTS,
} from './actionTypes';

export const loadPosts = (payload) => {
  return { type: FETCH_POSTS, payload };
};

export const loadPostsSuccess = (payload) => {
  return { type: FETCH_POSTS_SUCCESS, payload };
};

export const loadPostsFailure = (payload) => {
  return { type: FETCH_POSTS_ERROR, payload };
};

export const updatePost = (payload) => {
  return { type: UPDATE_POST, payload };
};

export const updatePosts = (payload) => {
  return { type: UPDATE_POSTS, payload };
};
