import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadItems} from '../actions';

class ItemDetails extends Component {
    constructor(props){
        super();
        this.state = {
           title : "lala"
        }
    }

    componentDidMount(){
        
        /*fetch('http://localhost:3004/games')
        .then(response => {
            return response.json();
        })
        .then(json => {
            //this.setState({items: json})
            this.props.dispatch(loadItems(json));
        });*/
    }

    render(){
        return(
            <div>
                <h1>Item: {this.state.title}</h1>
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
