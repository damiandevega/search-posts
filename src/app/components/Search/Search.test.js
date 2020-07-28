import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestProvider from '../../../config/TestProvider';
import Search from './Search';
import PostsList from '../PostsList/PostsList';
import fetchPostsMockData from '../../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<Search />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });

  it('Show number of results that match number of posts that meet search value conditions', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <Search title="Test" />
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    const search = getByTestId('search-textfield');
    fireEvent.change(search, {
      target: {
        value:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      },
    });
    const resultsElement = getByText(/Results/i);
    expect(resultsElement.nextSibling.textContent).toMatch('1');
  });
});
