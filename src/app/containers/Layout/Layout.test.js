import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestProvider from '../../../config/TestProvider';
import Layout from './Layout';
import Search from '../../components/Search/Search';
import PostsList from '../../components/PostsList/PostsList';
import fetchPostsMockData from '../../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<Layout />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search title="Test" />
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
