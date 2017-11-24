import React, { Component } from 'react';
import Topsection from './components/Topsection'
import Num2 from './components/Num2'
import Nav from './components/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className ="nav-scroll">
        <Nav/>
        </div>
        <div className="App">
        <Topsection />
        <Num2 />
      </div>
      </div>
    );
  }
}

export default App;
