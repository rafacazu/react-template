import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class Item extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Link className="list-group-item list-group-item-action" to={'/items/'+this.props.id} >{this.props.title}</Link>
            </div>
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