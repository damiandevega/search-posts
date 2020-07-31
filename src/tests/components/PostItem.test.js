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
    expect(postItem.container).toBeDefined();
    expect(postItem.container.children.length).toBe(1);
  });

  it('Shows input populated with current post title when edit button is clicked', () => {
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
    expect(editInput.value).toMatch('Title Value');
  });

  it('Shows textarea populated with current post body when edit button is clicked', () => {
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

    const editTextarea = container.querySelector('textarea[name="edit-textarea"]');
    expect(editTextarea.value).toMatch('Body Value');
  });
});
