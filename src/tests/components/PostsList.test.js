import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import PostsList from '../../app/components/PostsList';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<PostsList />', () => {
  it('Renders <PostsList /> successfully without error', () => {
    const postsList = render(
      <TestProvider>
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    expect(postsList.container).toBeDefined();
    expect(postsList.container.children.length).toBe(2);
  });

  it('Shows number of results that match number of posts passed in as props', () => {
    const { container } = render(
      <TestProvider>
        <PostsList posts={postsMockData} />
      </TestProvider>
    );
    const resultsElement = container.querySelector('p[name="results"]');
    expect(resultsElement.textContent).toMatch('100');
  });

  it('Shows "No Posts Found From Search." text when no posts are passed in as props', async () => {
    const { getByText } = render(
      <TestProvider>
        <PostsList posts={[]} />
      </TestProvider>
    );
    const noResults = await waitForElement(() => getByText('No Posts Found From Search.'));
    expect(noResults).toBeDefined();
  });
});
