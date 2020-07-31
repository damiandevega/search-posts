import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import Header from '../../app/components/Header';

describe('<Header />', () => {
  it('Renders <Header /> successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header title="Search Posts" />
      </TestProvider>
    );
    expect(header.container).toBeDefined();
    expect(header.container.children.length).toBe(1);
  });
  it('Shows h1 title based on props passed in', () => {
    const header = render(
      <TestProvider>
        <Header title="Test Title" />
      </TestProvider>
    );
    expect(header.container.querySelector('h1').textContent).toBe('Test Title');
  });
});
