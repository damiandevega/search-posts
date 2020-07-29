import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../../config/TestProvider';
import Search from '../../components/Search/Search';
import PostsList from '../../components/PostsList/PostsList';
import fetchPostsMockData from '../../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

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
});
