import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import Search from '../../app/components/Search';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<Search />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search posts={postsMockData} />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });
});
