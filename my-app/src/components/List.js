import React, {Component} from 'react';
import {Item} from './Item';

export default class List extends Component{

    constructor(){
        super();
        this.state = {
            items: []
        }
    }

   

    renderList(){
        return this.props.items.map((items,index) => (
            <Item key={index} title={items.title} year={items.year} console={items.console} />
        ))
    }


    render(){
        return(
            <div>
                {this.props.items.length > 0 &&
                    <ul>
                        {this.renderList()}
                    </ul>
                }
            </div>
        )
    }
};