import React, {Component} from 'react';
import List from '../components/List';
import {loadItems} from '../actions'
import {connect} from 'react-redux';


class ItemList extends Component {
    constructor(){
        super();
        this.state = {
            items : []
        }
        this.removeItem = this.removeItem.bind(this);
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
        let id = event.target.dataset.id;
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

    static getDerivedStateFromProps(props, state){
        return { items: props.items }
    }

    render(){
        return (
            <div>
                <List items={this.state.items} onClick={this.removeItem}/>
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