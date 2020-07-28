import React from 'react';
import Header from './components/Header/Header';
import Layout from './containers/Layout/Layout';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header title="Search Posts" />
      <Layout />
    </div>
  );
};

export default App;
