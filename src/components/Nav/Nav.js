import React, {Component} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'



export default class Nav extends Component{








    render(){
        return(
            <div nav-bar>
                <div>
                    </div>

                <div>

                <ul>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="/shop">SHOP</Link></li>
                      <li><Link to="/art">ART</Link></li>
                      <li><Link to="/contact">CONTACT</Link></li>
                      <li><a href="#about">ABOUT</a></li>
                    </ul>
                    </div>

                <div>
                    </div>



                </div>
        )
    }
}