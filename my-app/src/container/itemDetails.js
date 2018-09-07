import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editItem} from '../actions';
import AddItem from '../container/addItem';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class ItemDetails extends Component {
    constructor(props){
        super();
        this.state = {
           title : "",
           console: "",
           year: "",
           id: ""
        }
        this.editCurrentItem = this.editCurrentItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    editCurrentItem(event){
      this.props.dispatch(editItem(this.state));
    }

    
    deleteItem(event){

      var id = this.state.id;

      fetch('http://localhost:3004/games/'+id,{
            method: 'DELETE'
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log('Item has been deleted.');
            this.props.history.push(`/items`)
        })
    }


    componentDidMount(){
      let id = this.props.location.pathname.replace('/items/','');
      this.fetchItemData(id);
    }

    componentWillReceiveProps(nextProps){
      let id = nextProps.location.pathname.replace('/items/','');
      this.fetchItemData(id);
    }

    fetchItemData(id){
      fetch('http://localhost:3004/games/'+id)
      .then(response => {
          return response.json();
      })
      .then(json => {
          this.setState(json)
      });
    }

    render(){
        return(
            <div>
                <Link to="/items"> &#171; Back</Link>
                <h1>{this.state.title}</h1>
                <h3>{this.state.console}</h3>
                <h3>{this.state.year}</h3>
                <Link to={'/items/edit/'+this.state.id} className="item__edit" onClick={this.editCurrentItem}>Edit item</Link> <br />
                <a className="item__remove" onClick={this.deleteItem}>Delete</a>
            </div>
        )
    }
}


//state that I want to expose
function mapStateToProps(state, ownProps){
    return {
        title: state.title
    }
}

export default connect(mapStateToProps)(ItemDetails);
