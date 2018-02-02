import React, { Component } from "react"
import {Link} from 'react-router-dom'
import "./login.css"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      showModal: "loginNOPE"
    }
  }

  displayModalHandler() {
    this.state.showModal === "loginNOPE"
      ? this.setState({ showModal: "loginModalBackground" })
      : this.setState({ showModal: "loginNOPE" })
  }

  render() {
    return (
      <div>
        <p
          className="loginbuttonstyling"
          onClick={() => this.displayModalHandler()}
        >
          LOGIN
        </p>

        <div
          className={this.state.showModal}
          onClick={() => this.displayModalHandler()}
        >
          <div className="loginModal">- LOGIN INCOMPLETE -
          <Link to="/adminconsole" style={{color: 'white'}}> CLICK TO VISIT ADMIN CONSOLE</Link> </div>
      
        </div>
      </div>
    )
  }
}
export default Login
