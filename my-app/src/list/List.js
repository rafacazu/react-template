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
    
    renderGames(){
        return this.state.games.map((games,index) => (<div key={index}>{games.title}</div>))
    }


    render(){
        return(
            <div>
            {this.renderGames()}
            </div>
        )
    }
};