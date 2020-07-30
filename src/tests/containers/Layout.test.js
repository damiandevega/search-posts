import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TestProvider from '../../config/TestProvider';
import mockInitialState from '../../config/mocks/initialState';
import Layout from '../../app/containers/Layout';
import Search from '../../app/containers/Search';
import PostsList from '../../app/components/PostsList';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

const mockStore = configureStore();
const mockWithSearch = { ...mockInitialState };
mockWithSearch.search = 'qui e';
let storeWithSearch = mockStore(mockWithSearch);

const mockWithAutocomplete = { ...mockInitialState };
mockWithAutocomplete.search = 'sunt';
let storeWithAutocomplete = mockStore(mockWithAutocomplete);

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

  it('Filters autocomplete options shown on the screen when a search value is entered', async () => {
    const { container, rerender } = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );

    const searchElement = container.querySelector('input');
    fireEvent.change(searchElement, {
      target: {
        value: 'sunt',
      },
    });

    expect(searchElement.value).toBe('sunt');

    fireEvent.focus(searchElement);

    rerender(
      <TestProvider mockStore={storeWithAutocomplete}>
        <Layout />
      </TestProvider>
    );

    expect(container.querySelectorAll('div[role="menuitem"]').length).toBe(7);
  });
});
