import React, {Component} from 'react';
import {Item} from './Item';

export class ItemList extends Component{

    constructor(){
        super();
        this.state = {
            //items: []
        }
    }

   /* componentDidMount(){
        fetch('http://localhost:3004/games')
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.setState({items: json});
        });
    }

    renderList(){
        return this.state.items.map((items,index) => (
            <Item key={index} title={items.title} year={items.year} console={items.console} />
        ))
    }*/


    render(){
        return(
            <div>
                {/*this.state.items.length > 0 &&
                    <ul>
                        {this.renderList()}
                    </ul>
                */}
            </div>
        )
    }
};