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

      var id = window.location.pathname;
      id = id.replace('/details/','');
      id = Number(id);
      console.log(this.state.title);

      fetch('http://localhost:3004/games/'+id)
      .then(response => {
          return response.json();
      })
      .then(json => {
          this.setState(json);
          //this.props.dispatch(loadDetails(json));
      });
    }

    /*static getDerivedStateFromProps(props, state){
      console.log(props, state)
      return props;
    }*/

    render(){
        return(
            <div>
                <h1>Item: {this.state.title}</h1>
                <p>Year : {this.state.year}</p>
                <p>Console: {this.state.console}</p>
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
