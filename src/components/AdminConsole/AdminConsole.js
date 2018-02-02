import React, { Component } from "react"
import axios from "axios"
import ShowItems from "./ConsoleItems/ShowItems"

import "./adminconsole.css"

class AdminConsole extends Component {
  constructor() {
    super()
    this.state = {
      componentToShow: null
    }
  }

  render() {
    return (
      <div className="adminconsolebg">
        <div>{this.state.componentToShow}</div>
        <div>Add Item</div>
        <div>Remove Item</div>
        <div><ShowItems /></div>
      </div>
    )
  }
}
export default AdminConsole
