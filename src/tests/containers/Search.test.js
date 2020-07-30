import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TestProvider from '../../config/TestProvider';
import mockInitialState from '../../config/mocks/initialState';
import Search from '../../app/containers/Search';
// import PostsList from '../../components/PostsList/PostsList';
import fetchPostsMockData from '../../config/mocks/fetchPostsMockData';

const postsMockData = JSON.parse(fetchPostsMockData);

describe('<Search />', () => {
  it('Renders <Search /> successfully without error', () => {
    const search = render(
      <TestProvider>
        <Search posts={postsMockData} />
      </TestProvider>
    );
    expect(search.container).toBeTruthy();
  });

  // it('Filters posts shown on the screen when a search value is entered', async () => {
  //   const { getByRole, container } = render(
  //     <TestProvider>
  //       <Search posts={postsMockData} />
  //       <PostsList posts={postsMockData} />
  //     </TestProvider>
  //   );

  //   const searchElement = getByRole('input');
  //   fireEvent.change(searchElement, {
  //     target: {
  //       value:
  //         'qui e',
  //     },
  //   });
  //   expect(searchElement.value).toBe('qui e')

  //   fireEvent.blur(searchElement);

  //   await wait(1000);

  //   // console.log('container123', container.querySelector('div[role="listitem"]').length);

  //   screen.debug();
  //   expect(container.querySelectorAll('div[role="listitem"]').length).toBe(1);

  //   // const postItems = await waitForElement(() => getAllByRole('listitem'));
  //   // setTimeout(() => {
  //     // expect(getAllByRole('listitem').length).toBe(1);
  //   // });
  // });

  // it('Shows potential search results in an autocomplete dropdown when text is entered', async () => {
  //   const { getByRole, getAllByRole } = render(
  //     <TestProvider>
  //       <Search posts={postsMockData} />
  //       <PostsList posts={postsMockData} />
  //     </TestProvider>
  //   );

  //   const searchElement = getByRole('input');
  //   fireEvent.change(searchElement, {
  //     target: {
  //       value: 'sunt aut',
  //     },
  //   });
  //   // fireEvent.focus(searchElement);

  //   const options = await waitForElement(() => getAllByRole('menuitem'));

  //   await flushPromises();

  //   setTimeout(() => {
  //     expect(options.length).toBe(2);
  //   });
  // });

  // it('<<fill in description here>>', () => {
  //   const { getByRole } = render(
  //     <TestProvider>
  //       <Search posts={postsMockData} />
  //       <PostsList posts={postsMockData} />
  //     </TestProvider>
  //   );
  //   const search = getByRole('textbox');

  //   fireEvent.change(search, {
  //     target: { value: 'sunt aut' },
  //   });
  //   fireEvent.focus(search);

  //   const autocomplete = getByRole('search-autocomplete');
  //   console.log(
  //     'autocomplete children count',
  //     autocomplete.childNodes[1].textContent
  //   );

  //   // expect(resultsElement.nextSibling.textContent).toMatch('1');
  // });
});
