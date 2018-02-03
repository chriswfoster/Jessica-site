import React, { Component } from "react"
import axios from "axios"
import ShowItems from "./ConsoleItems/ShowItems"
import AddItem from './ConsoleItems/AddItem'

import "./adminconsole.css"

class AdminConsole extends Component {
  constructor() {
    super()
    this.state = {
      componentToShow: "loginNOPE"

    }
  }

  displayAddItem(){
    this.state.componentToShow === "loginNOPE" ?
    this.setState({componentToShow: "displayAddItem"}) :
    this.setState({componentToShow: "loginNOPE"})
  }

  render() {
    return (
      <div className="adminconsolebg">
        <div className={this.state.componentToShow}>
        <AddItem modalHider={() => this.displayAddItem()}/>
        </div>
        <div className="adminconsoletopitems">
          <div onClick={() => this.displayAddItem()} className="addItembutton">ADD AN ITEM</div>
         </div>
        <div><ShowItems /></div>
        
      </div>
    )
  }
}
export default AdminConsole
