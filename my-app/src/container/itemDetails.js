import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editItem} from '../actions';
import AddItem from '../container/addItem';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import toastr from 'toastr';

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
            this.props.history.push(`/items`);
            this.displayMessage('The item has been deleted.')

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

    displayMessage(message){
      toastr.success(message);
    }

    render(){
        return(
            <div>
                <Link to="/items" className="btn btn-link"> &#171; Back</Link>
                <a className="item__remove btn btn-sm float-right btn-danger" onClick={this.deleteItem}>Delete</a>
                <Link to={'/items/edit/'+this.state.id} className="item__edit btn btn-sm btn-warning float-right" onClick={this.editCurrentItem}>Edit item</Link>
                <h1>{this.state.title}</h1>
                <h3>{this.state.console}</h3>
                <h3>{this.state.year}</h3>
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
