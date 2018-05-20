import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import {List} from './list/List';
import Form from './form/Form';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <Header />
        <List />
        <Form />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
