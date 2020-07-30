import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import mockInitialState from './mocks/initialState';

const mockStore = configureStore();
let store = mockStore(mockInitialState);

export default function TestProvider({ children, mockStore }) {
  if (mockStore) {
    store = mockStore;
  }
  return <Provider store={store}>{children}</Provider>;
}
