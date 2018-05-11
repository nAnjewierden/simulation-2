import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import Header from './component/Header/Header'
import route from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {route}
      </div>
    );
  }
}

export default App;
