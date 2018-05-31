import React, { Component } from 'react';
import Form from './../components/Form';
import {addItem} from '../actions';
import {saveItem} from '../actions';
import {connect} from 'react-redux';



class AddItem extends Component {

    constructor(props){
        super();
        this.state = {
            title: "",
            year: "",
            console: ""
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /*logic to save the new item*/
    handleInputChange(event){
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    submitForm(e){
        e.preventDefault()
        //const content = this.state;
        this.props.dispatch(addItem(this.state.title, this.state.year, this.state.console));
    }

    render(){
        return(
            <Form onChange={this.handleInputChange} onClick={this.submitForm} value={this.state}/>
        )
    }
    
}


//state that I want to expose
function mapStateToProps(state, ownProps){
    return {
        items: state.items
    }
}

//dispatch that I want to expose 
/*function mapDispatchToProps(dispatch){

}*/



export default connect(mapStateToProps)(AddItem)