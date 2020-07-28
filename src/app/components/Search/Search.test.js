import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestProvider from '../../../config/TestProvider';
import Search from './Search';

describe('<Search />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });
});
