import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {ItemList} from './itemList';
import AddItem from '../container/addItem';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <Header />
        <ItemList />
        <AddItem/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
