import React, {Component} from 'react';
import {Item} from '../item/Item';

export class List extends Component{


    componentDidMount(){
        fetch('http://localhost:3004/games')
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson);
        })
    }

    render(){
        return(
            <ul>
                <li><Item /></li>
                <li><Item /></li>
                <li><Item /></li>
                <li><Item /></li>
            </ul>
        )
    }
};