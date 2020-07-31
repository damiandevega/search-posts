import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../config/TestProvider';
import Header from '../../app/components/Header';

describe('<Header />', () => {
  it('Renders <Header /> successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header title="Test" />
      </TestProvider>
    );
    expect(header.container).toBeDefined();
    expect(header.container.children.length).toBe(1);
    expect(header.container.querySelector('h1').textContent).toBe('Test');
  });
});
