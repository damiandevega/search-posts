import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getPosts } from '../../api';
import {
  loadPostsSuccess,
  loadPostsFailure,
  updatePosts,
} from '../actions/postsActions';
import { FETCH_POSTS, UPDATE_POST } from '../actions/actionTypes';

const getCollections = (state) => state.posts.posts;

export function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(loadPostsSuccess(response.data));
  } catch (error) {
    yield put(loadPostsFailure(error.message));
  }
}

export function* updatePostSaga({ payload }) {
  const collections = yield select(getCollections);
  const filterItems = collections.filter((item) => payload.id !== item.id);
  const newItems = [...filterItems, payload];
  const sortedItems = newItems.sort((a, b) => a.id - b.id);
  yield put(updatePosts(sortedItems));
}

export function* postsWatcherSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}
