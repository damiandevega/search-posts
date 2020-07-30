import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TestProvider from '../../../config/TestProvider';
import mockInitialState from '../../../config/mocks/initialState';
import Layout from '../Layout/Layout';
import Search from '../../containers/Search/Search';
import PostsList from '../../components/PostsList/PostsList';
import fetchPostsMockData from '../../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

const mockStore = configureStore();
const mockWithSearch = { ...mockInitialState };
mockWithSearch.search = 'qui e';
let storeWithSearch = mockStore(mockWithSearch);

describe('<Layout />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search posts={postsMockData} />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });

  it('Renders <PostsList /> successfully without error', () => {
    const postsList = render(
      <TestProvider>
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    expect(postsList.container).toBeTruthy();
  });

  it('Filters posts shown on the screen when a search value is entered', async () => {
    const { container, rerender } = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );

    const searchElement = container.querySelector('input');
    fireEvent.change(searchElement, {
      target: {
        value: 'qui e',
      },
    });
    expect(searchElement.value).toBe('qui e');
    fireEvent.blur(searchElement);

    rerender(
      <TestProvider mockStore={storeWithSearch}>
        <Layout />
      </TestProvider>
    );

    expect(container.querySelectorAll('div[role="listitem"]').length).toBe(4);
  });
});
