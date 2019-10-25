import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Add from './components/addcustomer';
import Navbar from './components/nav';
import Card from './components/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Card/>
        <Add/>
        <Customers />
      </div>
    );
  }
}

export default App;
