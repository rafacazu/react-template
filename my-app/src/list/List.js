import React, {Component} from 'react';
import {Item} from '../item/Item';

export class List extends Component{

    constructor(){
        super();
        this.state = {
            games: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3004/games')
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.setState({games: json});
        });
    }

    renderList(){
        return this.state.games.map((games,index) => (
            <Item key={index} title={games.title} year={games.year} />
        ))
    }


    render(){
        return(
            <div>
                {this.state.games.length > 0 &&
                    <ul>
                        {this.renderList()}
                    </ul>
                }
            </div>
        )
    }
};