import React from 'react'
import Nav from './Nav.js'
import Footer from './Footer.js'

export default class Main extends React.Component{
    constructor(props){
      super(props)
    }
    render() {
        return(
            <div>
                <Nav/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
