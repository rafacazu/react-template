import React from 'react';
import PropTypes from 'prop-types';

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

Item.propTypes =  {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    console: PropTypes.string.isRequired,
}