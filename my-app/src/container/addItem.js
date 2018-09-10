import React, { Component } from 'react';
import Form from './../components/Form';
import {addItem} from '../actions';
import {editItem} from '../actions';
import {connect} from 'react-redux';
import toastr from 'toastr';



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
        this.goBack = this.goBack.bind(this);

    }

    componentDidMount(){
      if(!this.state.id){
        let id = this.props.match.params.id;
        if(id){
          fetch('http://localhost:3004/games/'+id)
          .then(response => {
              return response.json();
          })
          .then(json => {
              this.setState(json)
          });
        }
      }
    }

    displayMessage(message){
      toastr.success(message)
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
        if(props.items && props.items.type === "EDIT_ITEM"){
            return props.items.item;
        }else{
            return null;
        }
    }

    goBack(){
        this.props.history.goBack();
    }

    submitForm(e){
        e.preventDefault()

        var content = this.state;
        var urlApi = "http://localhost:3004/games";
        var message = '';
        var ajaxSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        }

        message = 'Item has been added.';
        if(content.id !== undefined){
            ajaxSettings.method = 'PUT'
            urlApi += '/'+content.id;
            message = 'Item has been updated.'
        }

        fetch(urlApi,ajaxSettings)
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.props.dispatch(addItem(json));
            this.props.history.push(`/items/`+json.id);
            this.displayMessage(message)
        });
    }

    render(){
        return(
            <div>
                <a onClick={this.goBack} className="btn btn-link"> &#171; Back</a>
                <Form onChange={this.handleInputChange} onClick={this.submitForm} value={this.state}/>
            </div>
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