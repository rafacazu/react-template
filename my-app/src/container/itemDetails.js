import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadDetails} from '../actions';  

class ItemDetails extends Component {
    constructor(props){
        super();
        this.state = {
           title : "",
           console: "",
           year: "",
           id: ""
        }
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
