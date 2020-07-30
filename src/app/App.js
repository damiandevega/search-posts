import React, { Fragment } from 'react';
import Header from './components/Header';
import Layout from './containers/Layout';

const App = () => {
  return (
    <Fragment>
      <Header title="Search Posts" />
      <Layout />
    </Fragment>
  );
};

export default App;
