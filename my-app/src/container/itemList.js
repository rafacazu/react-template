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
    }

    render(){
       // this.props.dispatch(loadItems());
        return (
            
            <div>
                Item List:
                <List items={this.state.items}/>
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