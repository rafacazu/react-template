import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                <div key={this.props.id} className="item">{this.props.title} - {this.props.year} - {this.props.console} <a className="item__remove" data-id={this.props.id} onClick={this.props.remove}>remove</a> <a  className="edit_item" data-id={this.props.id} onClick={this.props.edit}>edit</a></div>
            </li>
        )
    }
}

Item.propTypes =  {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    console: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
}