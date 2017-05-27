import React from 'react';
import ReactDOM from 'react-dom';
export default class Footer extends React.Component{
  render() {
    return (
      <div className='footer'>
        <div className='footer_column1'>
        <div className='text'>© 2017 Profile Web</div>
        <div className='text'>Build with React, Sass, Webpack</div>
        </div>
        <div className='footer_column2'>
          <div className='text'>Subscribe News</div>
          <form action="http://localhost:3000/signup" method="POST">
            <input className='email_input' type='email' name="Sub_email" id="Sub_email"/>
            <input type="submit" className="submitemail" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
