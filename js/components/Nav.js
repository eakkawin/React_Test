import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
export default class Nav extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <div className='navbar'>
          <ul className="nav">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <div>
              <img className='logo' src='../image/logo.png'/>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}
