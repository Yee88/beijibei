import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar"
class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
