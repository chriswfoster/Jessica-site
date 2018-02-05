import React, { Component } from "react"
import axios from 'axios';


class RemoveItem extends Component {
  constructor() {
    super()
    this.state = {}
this.deleteItem = this.deleteItem.bind(this)  
}


  deleteItem() {
    const { toremove } = this.props
    this.props.itemToDelete(toremove)
    this.closeWindow()
  }
  closeWindow(){
    this.props.displayFunction("loginNOPE")
  }

  render() {
    const { toremove } = this.props
    return (
      <div>
        <div
          className={this.state.showModal}
          
        >
        <div>
          <div> DELETE ITEM ID#{toremove}</div>
          <button onClick={() => this.deleteItem()}>YES</button>
          <button onClick={()=> this.closeWindow()}>No</button>
          </div>
        </div>
      </div>
    )
  }
}
export default RemoveItem
