import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import ItemList from '../container/itemList';
import AddItem from '../container/addItem';
import ItemDetails from '../container/itemDetails';
import Header from './Header';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path='/' component={Home}></Route>
          <Route path='/items' component={ItemList}></Route>
          <Route path='/items' component={ItemDetails}></Route>
          <Route path='/add-item' component={AddItem}></Route>
        </div>
      </Router>  
    );
  }
}

export default App;
