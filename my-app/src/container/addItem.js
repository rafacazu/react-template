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
        const content = this.state;

        fetch('http://localhost:3004/games?title="doom"',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        });

        // this is saving the data in db.json - Next step is refreshing all the components once the data is saved. For that, I'll add the redux;
    }

    render(){
        return(
            <Form onChange={this.handleInputChange} onClick={this.submitForm} />
        )
    }
    
}




export default connect()(AddItem)


