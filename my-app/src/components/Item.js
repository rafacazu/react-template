import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class Item extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <li>
                <Link to={'/items/'+this.props.id} >{this.props.title}</Link>
                {/* <a className="item" key={this.props.id} id={this.props.id} onClick={this.props.onClick} to={'/items/'+this.props.id}>{this.props.title}</a> */}
                {/* <div id={"item_" + this.props.id} key={this.props.id} className="item">{this.props.title} - {this.props.year} - {this.props.console} <a className="item__remove" onClick={this.props.remove}>remove</a> <a  className="item__edit" onClick={this.props.edit}>edit</a> <Link to={`/items/${this.props.id}`}>view more</Link> </div> */}
            </li>
        )
    }
}

Item.propTypes =  { 
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    console: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
    //remove: PropTypes.func.isRequired,
    //edit: PropTypes.func.isRequired
} 