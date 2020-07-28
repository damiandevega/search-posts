import { all } from 'redux-saga/effects';
import { postsWatcherSaga } from './postsSagas';

export default function* rootSaga() {
  yield all([postsWatcherSaga()]);
}
