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
        <div>
          <Header />
          <div className="App container">
            <div className="jumbotron">
              <Route path='/' exact component={Home}></Route>
              <Route path='/items' exact component={ItemList}></Route>
              <Route path='/items/:id' exact component={ItemDetails}></Route>
              <Route path='/items/edit/:id' component={AddItem}></Route>
              <Route path='/add-item' component={AddItem}></Route>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
