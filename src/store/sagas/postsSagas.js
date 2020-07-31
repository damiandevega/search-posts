import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getPosts } from '../../api';
import {
  loadPostsSuccess,
  loadPostsFailure,
  updatePosts,
} from '../actions/postsActions';
import { FETCH_POSTS, UPDATE_POST } from '../actions/actionTypes';

export function* fetchPostsSaga() {
  try {
    // fetches posts from api and dispatches FETCH_POSTS_SUCCESS
    const response = yield call(getPosts);
    yield put(loadPostsSuccess(response.data));
  } catch (error) {
    // if error fetching posts from api, dispatches FETCH_POSTS_ERROR
    yield put(loadPostsFailure(error.message));
  }
}

export function* updatePostSaga({ payload }) {
  // retrieves latests posts
  const posts = yield select((state) => state.posts.posts);
  // filters through posts to find payload post
  const filterItems = posts.filter((item) => payload.id !== item.id);
  // updates filtered posts with new updated post
  const newItems = [...filterItems, payload];
  // sorts through posts to place them in order by id
  const sortedItems = newItems.sort((a, b) => a.id - b.id);
  // updates posts with latest updated post
  yield put(updatePosts(sortedItems));
}

// watches for latest FETCH_POSTS and UPDATE_POST actions and calls appropriate saga for side-effects
export function* postsWatcherSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}
