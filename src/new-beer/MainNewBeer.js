import React, { Component } from 'react';
import imagenewbeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

class Mainnewbeer extends Component {
    state = {  }
  
  render() { 
    return (  
      <div>
        <img className=' vw-100' src ={imagenewbeer}/>
        <div className = 'p-5'>
         <Link to= '/new-beer'><h2>New Beer</h2> </Link> 
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
         
      </div>
    );
  }
}


 
export default  Mainnewbeer;