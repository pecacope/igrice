import React, { Component } from 'react';
import Dashboard from './Dashboard/dashboard';
import Header from './Header/header';

class HomePage extends Component {
  render () {
    return (
      <main>
        <Header />
        <Dashboard />
      </main>
    );
  }
}

export default HomePage;
