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
          <div className="loginModal">THIS THE LOGIN MODAL</div>
        </div>
      </div>
    )
  }
}
export default Login
