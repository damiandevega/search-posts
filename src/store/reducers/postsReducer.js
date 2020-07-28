import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  UPDATE_POST,
  UPDATE_POSTS,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  posts: [],
  error: '',
};

const postsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, isLoading: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case UPDATE_POST:
      return { ...state };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
