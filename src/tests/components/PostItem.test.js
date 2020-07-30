import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import PostItem from '../../app/components/PostItem';

const itemMockData = {
  id: 2,
  title: 'Test',
  body: 'Test',
};

describe('<PostItem />', () => {
  it('Renders <PostItem /> successfully without error', () => {
    const postItem = render(
      <TestProvider>
        <PostItem
          id={itemMockData.id}
          title={itemMockData.title}
          body={itemMockData.body}
        />
      </TestProvider>
    );
    expect(postItem.container).toBeTruthy();
  });
});
