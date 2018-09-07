import React, {Component} from 'react';
import List from '../components/List';
import {loadItems} from '../actions';
import {editItem} from '../actions';
import {loadDetails} from '../actions'; 
import {connect} from 'react-redux';
import AddItem from './addItem';
import { Link } from 'react-router-dom';


class ItemList extends Component {
    constructor(){
        super();
        this.state = {
            items : []
        }
        //this.removeItem = this.removeItem.bind(this);
        //this.editCurrentItem = this.editCurrentItem.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    componentDidMount(){
        
        fetch('http://localhost:3004/games')  
        .then(response => {
            return response.json();
        })
        .then(json => {
            //this.setState({items: json})
            this.props.dispatch(loadItems(json));
        });
    }


    showDetails(event){
       let id = event.target.id;
        console.log(id);
  
        fetch('http://localhost:3004/games/'+id)
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.props.dispatch(loadDetails(json));
        });
    }

    

    static getDerivedStateFromProps(props, state){

      if(props.items && props.items.type === "EDIT_ITEM"){
        return {items : state.items};
      }

      if(props.items && props.items.type === "ADD_ITEM"){
        let nonEditedItems = state.items.filter(item => item.id != props.items.item.id);
        let result = [...nonEditedItems, props.items.item];
        return {items : result};
      }

      if(props.items && props.items.type === "LOAD_DETAILS"){
        return {items : state.items};
      }
      
      return {items : props.items};
      

      

        /*if(props.items && props.items.type === "EDIT_ITEM"){
            return props.items.item;
        }else{
            if(state.items.length == 0){
                return {items : props.items};
            }else{
                let unchangedItems = state.items.filter( item => item.id != props.items[0].id);
                let newItems = [...unchangedItems, props.items[0]];
                newItems.sort(function(obj1, obj2){
                    return obj1.id - obj2.id;
                });
                return {items: newItems}
            }
        }*/
    }

    render(){
        return (
            <div>
                <List items={this.state.items} onClick={this.showDetails}/>
                <Link to='/add-item'>Add new item +</Link>
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

export default connect(mapStateToProps)(ItemList);