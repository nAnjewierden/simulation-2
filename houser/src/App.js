import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import Header from './component/Header/Header'
import route from './route'
import axios from 'axios'
// matchobject altertable
class App extends Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }
  addColumn(){
    axios.get('/api/addColumn').then((res) => this.setState({
      users: res.data
    }))
  }
  render() {
    return (
      <div className="App">
        <Header/>
        {route}
        <button onClick={() => this.addColumn()}>Add Column</button>
        {this.state.users}
      </div>
    );
  }
}

export default App;
