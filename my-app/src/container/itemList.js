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
        let id = event.target.parentNode.dataset.id;

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
        let id = event.target.parentNode.dataset.id;
        id = Number(id); 
        console.log('Edit item '+ id);
        let newItem = {
            "title": "new_title",
            "year": "new_year",
            "console": "new_console",
            "id": id
        }

        this.props.dispatch(editItem(newItem));
        //http://localhost:3004/games/{id}
 


    }

    static getDerivedStateFromProps(props, state){
        return { items: props.items }
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