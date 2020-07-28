import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestProvider from '../../../config/TestProvider';
import PostItem from './PostItem';

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
