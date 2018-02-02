import React, { Component } from "react"

import "./login.css"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      showModal: "loginNOPE"
    }
  }

  displayModalHandler() {
    this.state.showModal === "loginNOPE" ? 
    this.setState({ showModal: "loginModalBackground" }) :
    this.setState({showModal: "loginNOPE"})
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

        <div className={this.state.showModal}>
          <div className="loginModal">THIS MODAL</div>
        </div>
      </div>
    )
  }
}
export default Login
