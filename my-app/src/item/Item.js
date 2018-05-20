import React from 'react';

export class Item extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <li><div>{this.props.title} {this.props.year}</div></li>
        )
    }
}