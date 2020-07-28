import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../../../config/TestProvider';
import Header from './Header';

describe('<Header />', () => {
  it('Renders <Header /> successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header title="Test" />
      </TestProvider>
    );
    expect(header.container).toBeTruthy();
  });
});
