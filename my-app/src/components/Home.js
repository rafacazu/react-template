import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

class Home extends Component{

  displayMessage(message){
    toastr.info(message)
  }

  render(){
    return (
      <div>
        {this.displayMessage('You are in the home page')}
        <h1>Welcome</h1>
        <Link to={'/items'} className="btn btn-lg btn-primary" >Check out the items list »</Link>
      </div>
    )
  }
} 

export default Home;