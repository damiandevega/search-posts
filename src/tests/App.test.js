import React from 'react';
import { render } from '@testing-library/react';
import TestProvider from '../config/TestProvider';
import App from '../app/App';
import Header from '../app/components/Header';
import Layout from '../app/containers/Layout';

describe('<App />', () => {
  it('Renders <App /> successfully without error', () => {
    const app = render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    expect(app.container).toBeDefined();
    expect(app.container.children.length).toBe(2);
    expect(app.container.querySelector('h1').textContent).toBe('Search Posts');
  });

  it('Renders <Header /> successfully without error', () => {
    const header = render(
      <TestProvider>
        <Header title="Test Title" />
      </TestProvider>
    );
    expect(header.container).toBeDefined();
    expect(header.container.children.length).toBe(1);
    expect(header.container.querySelector('h1').textContent).toBe('Test Title');
  });

  it('Renders <Layout /> successfully without error', () => {
    const layout = render(
      <TestProvider>
        <Layout />
      </TestProvider>
    );
    expect(layout.container).toBeDefined();
    expect(layout.container.children.length).toBe(1);
  });
});
