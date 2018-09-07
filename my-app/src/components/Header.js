import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav>
              <div className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <Link to="/">Home</Link> | <Link to="/items">Items</Link>
              </div>
            </nav> 
        );
    }
}

export default Header;