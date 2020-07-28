import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  search: searchReducer,
});

export default rootReducer;
