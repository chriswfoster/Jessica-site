import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import router from './router'

import Login from './components/Login/Login'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className ="nav-scroll">
        <Nav />
        <Login />
    </div>
      {router}
      </div>
    );
  }
}

export default App;
