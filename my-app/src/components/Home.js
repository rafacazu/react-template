import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{
  render(){
    return (
      <div>
        <h1>Welcome</h1>
        <Link to={'/items'} className="btn btn-lg btn-primary" >Check out the items list »</Link>
      </div>
    )
  }
} 

export default Home;