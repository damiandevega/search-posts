import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import PostItem from '../../app/components/PostItem';

const itemMockData = {
  id: 2,
  title: 'Title Value',
  body: 'Body Value',
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

  it('Shows input populated with current post title when EDIT button is clicked', () => {
    const { container, getByRole } = render(
      <TestProvider>
        <PostItem
          id={itemMockData.id}
          title={itemMockData.title}
          body={itemMockData.body}
        />
      </TestProvider>
    );

    const editButton = getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    const editInput = container.querySelector('input[name="edit-input"]');
    const editTextarea = container.querySelector('textarea[name="edit-textarea"]');
    expect(editInput.value).toMatch('Title Value');
    expect(editTextarea.value).toMatch('Body Value');
  });
});
