import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../config/TestProvider';
import App from './App';
import Header from './components/Header/Header';
import Layout from './containers/Layout/Layout';

describe('<App />', () => {
  it('Renders <App /> successfully without error', () => {
    const app = render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    expect(app.container).toBeTruthy();
  });

  it('Renders <Header /> successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header title="Test" />
      </TestProvider>
    );
    expect(header.container).toBeTruthy();
  });

  it('Renders <Layout /> successfully without error', () => {
    const layout = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );
    expect(layout.container).toBeTruthy();
  });
});
