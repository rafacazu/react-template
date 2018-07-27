import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <h1>Simple List</h1>
                <Link to="/details">Item details</Link>
            </div> 
        );
    }
}

export default Header;