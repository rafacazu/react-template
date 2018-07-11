import React, { Component } from 'react';
import Form from './../components/Form';
import {addItem} from '../actions';
import {connect} from 'react-redux';



class AddItem extends Component {

    constructor(props){
        super();
        this.state = {
            title: "",
            year: "",
            console: "",
            id: undefined
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fillForm = this.fillForm.bind(this);
    }

    /*logic to save the new item*/
    handleInputChange(event){
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    fillForm(item){
        this.setState(item);
    }

    static getDerivedStateFromProps(props, state){
        if(props.items[0] && props.items[0].type === "EDIT_ITEM"){
            return props.items[0].item;
        }else{
            return props.items;
        }
    }

    submitForm(e){
        e.preventDefault()

        var content = this.state;
        var ajaxSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        }

        if(content.id !== undefined){
            ajaxSettings.method = 'PUT'
        }

        fetch('http://localhost:3004/games',ajaxSettings)
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.props.dispatch(addItem(json));
        });
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