import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
});
