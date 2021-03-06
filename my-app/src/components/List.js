import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Item} from './Item';

export default class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
   

    renderList(){
        return this.props.items.map((items,index) => (
            <Item key={index} title={items.title} year={items.year} console={items.console} id={items.id} onClick={this.props.onClick}/>
            // <Item key={index} title={items.title} year={items.year} console={items.console} id={items.id} remove={this.props.remove} edit={this.props.edit} more={this.props.more}/>
        ))
    }


    render(){
        return(
            <div>
                {this.props.items.length > 0 &&
                    <div className="list-group">
                        {this.renderList()}
                    </div>
                }
            </div>
        )
    }
}

List.propTypes = {
   items: PropTypes.array.isRequired
}