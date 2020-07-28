import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../../config/TestProvider';
import PostsList from './PostsList';
import fetchPostsMockData from '../../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<PostsList />', () => {
  it('Renders <PostsList /> successfully without error', () => {
    const postsList = render(
      <TestProvider>
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    expect(postsList.container).toBeTruthy();
  });

  it('Shows number of results that match number of posts passed in as props', () => {
    const { getByText } = render(
      <TestProvider>
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    const resultsElement = getByText(/Results/i);

    expect(resultsElement.nextSibling.textContent).toMatch('100');
  });
});
