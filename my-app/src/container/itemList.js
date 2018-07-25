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
        let id = event.target.parentNode.id;
        let numberId = id.replace('item_',"");
        numberId = Number(numberId); 

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

    editCurrentItem(event){
        let id = event.target.parentNode.id;
        let numberId = id.replace('item_',"");
        numberId = Number(numberId); 
        let el = document.getElementById(id);
        //el.classList.add("display-none");


        let selectedItem = this.state.items.filter(item => item.id === numberId);
        let newItem = selectedItem[0];

        this.props.dispatch(editItem(newItem));
 


    }

    static getDerivedStateFromProps(props, state){
        if(props.items && props.items.type === "EDIT_ITEM"){
            return props.items.item;
        }else{
            if(state.items.length == 0){
                return {items : props.items};
            }else{
                let unchangedItems = state.items.filter( item => item.id != props.items[0].id);
                let newItems = [...unchangedItems, props.items[0]];
                return {items: newItems}
            }
        }                                                                                                                                                                                                                                              
    }

    render(){
        return (
            <div>
                <List items={this.state.items} remove={this.removeItem} edit={this.editCurrentItem}/>
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