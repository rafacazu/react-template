import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ItemList from '../container/itemList';
import AddItem from '../container/addItem';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <Header />
        <ItemList />
        <AddItem/>
      </div>
    );
  }
}

export default App;
