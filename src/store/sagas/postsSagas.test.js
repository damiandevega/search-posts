import { runSaga } from 'redux-saga';
import { fetchPostsSaga, updatePostSaga } from './postsSagas';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';
import { FETCH_POSTS_SUCCESS } from '../../store/actions/actionTypes';

describe('fetchPostsSaga', () => {
  it('Should call API and dispatch FETCH_POSTS_SUCCESS action with response data as payload', async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPostsSaga
    );

    setTimeout(() => {
      expect(dispatched).toEqual([
        { type: FETCH_POSTS_SUCCESS, payload: JSON.parse(fetchPostsMockData) },
      ]);
    });
  });

  // it('Should call API and dispatch FETCH_POSTS_SUCCESS action with response data as payload', async () => {
  //   const dispatched = [];

  //   await runSaga(
  //     {
  //       dispatch: (action) => dispatched.push(action),
  //     },
  //     updatePostSaga
  //   );

  //   setTimeout(() => {
  //     expect(dispatched).toEqual([
  //       { type: FETCH_POSTS_SUCCESS, payload: JSON.parse(fetchPostsMockData) },
  //     ]);
  //   });
  // });
});
