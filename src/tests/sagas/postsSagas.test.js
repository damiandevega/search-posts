import { runSaga } from 'redux-saga';
import { fetchPostsSaga, updatePostSaga } from '../../store/sagas/postsSagas';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';
import fetchUpdatedPostsMockData from '../../config/mocks/fetchUpdatedPostsMockData';
import {
  FETCH_POSTS_SUCCESS,
  UPDATE_POSTS,
} from '../../store/actions/actionTypes';

describe('postsSagas', () => {
  it('Should call API and dispatch FETCH_POSTS_SUCCESS action with response data as payload', async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchPostsSaga
    ).toPromise();

    expect(dispatched).toEqual([
      { type: FETCH_POSTS_SUCCESS, payload: JSON.parse(fetchPostsMockData) },
    ]);
  });

  it('Should call updatePostSaga and dispatch UPDATE_POSTS action with updated data as payload', async () => {
    const dispatched = [];
    const state = {
      posts: {
        posts: JSON.parse(fetchPostsMockData),
      },
    };

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => state,
      },
      updatePostSaga,
      {
        payload: {
          userId: 1,
          body: 'Test',
          id: 2,
          title: 'Test',
        },
      }
    ).toPromise();

    expect(dispatched).toEqual([
      { type: UPDATE_POSTS, payload: JSON.parse(fetchUpdatedPostsMockData) },
    ]);
  });
});
