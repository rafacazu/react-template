import React, {Component} from 'react';
import List from '../components/List';
import {loadItems} from '../actions';
import {editItem} from '../actions';
import {connect} from 'react-redux';


class ItemList extends Component {
    constructor(){
        super();
        this.state = {
            items : []
        }
        this.removeItem = this.removeItem.bind(this);
        this.editCurrentItem = this.editCurrentItem.bind(this);
        this.seeMore = this.seeMore.bind(this);
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

    removeItem(event){
        let idAttribute = event.target.parentNode.id;
        let id = idAttribute.replace('item_',"");
        id = Number(id); 

       fetch('http://localhost:3004/games/'+id,{
            method: 'DELETE'
        })
        .then(response => {
            return response.json();
        })
        .then(json => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            let newItems = this.state.items.filter( item => item.id != id);
            this.props.dispatch(loadItems(newItems));
        })
    }

    seeMore(event){
        let id = event.target.parentNode.id;
        console.log(id);
    }

    editCurrentItem(event){
        let idAttribute = event.target.parentNode.id;
        let id = idAttribute.replace('item_',"");
        id = Number(id); 
        let el = document.getElementById(idAttribute);


        let selectedItem = this.state.items.filter(item => item.id === id);
        selectedItem = selectedItem[0];

        this.props.dispatch(editItem(selectedItem));
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
                <List items={this.state.items} remove={this.removeItem} edit={this.editCurrentItem} more={this.seeMore}/>
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