import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestProvider from '../config/TestProvider';
import App from '../app/App';
import Header from './components/Header/Header';
import Layout from './containers/Layout/Layout';

describe('<App />', () => {
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
