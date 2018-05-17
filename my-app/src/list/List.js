import React, {Component} from 'react';
import {Item} from '../item/Item';

export class List extends Component{
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