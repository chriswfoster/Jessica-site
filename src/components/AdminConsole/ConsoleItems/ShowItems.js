import React, { Component } from "react"
import axios from "axios"
import RemoveItem from "./RemoveItem"

class ShowItems extends Component {
  constructor() {
    super()
    this.state = {
      itemslist: [],
      itemToRemove: 0,
      showRemoveModal: "loginNOPE",
  
    }
  }

  componentDidMount() {
    axios.get("/api/getallitems").then(response => {
      console.log(response)
      this.setState({ itemslist: response.data })
    })
  }

  removeItem(id) {
    this.setState({ itemToRemove: id, showRemoveModal: "displayRemoveItem" })
  }

  deleteItem() {
    const {itemToRemove, itemslist} = this.state
    const temparray = itemslist;
    axios.post('/api/removeItem', {
      item_id: itemToRemove
    })
    for (var i = 0; i < temparray.length; i++){
      if (temparray[i].item_id === itemToRemove){
        temparray.splice(i, 1)
      }
      this.setState({itemslist: temparray})
    }
    this.closeWindow()
  }
  closeWindow(){
    this.setState({showRemoveModal: "loginNOPE"})
  }

  render() {
    const { itemslist } = this.state
    const displayList = itemslist.map((item, i) => (
      <div className="adminconsoleitemsorganize showitemstileborder" key={i}>
        {/* This CSS class ^ is found in Shop's css file. */}
        <div
          onClick={() => this.removeItem(item.item_id)}
          className="showitemstileX"
        >
          X
        </div>
        <img
          src={item.item_picurl}
          className="showitemsimages"
          alt="No Image available"
        />

        <p style={{ color: "white" }}><p style={{color: "red"}}>Item:</p> {item.item_name}</p>
        <p style={{ color: "white" }}><p style={{color: "red"}}>Price:</p> {item.item_price}</p>
        <p><p style={{color: "red"}}>Item Id:</p> {item.item_id}</p>
      </div>
    ))
    return (
      <div>
        <div className="itemsorganizer showitemsoverflowcontrol">
          {displayList}
        </div>

        <div className={this.state.showRemoveModal}>
        <div
          className={this.state.showModal}
          >
          <div> DELETE ITEM ID#: {this.state.questionitem}</div>
          <button onClick={() => this.deleteItem()}>YES</button>
          <button onClick={()=> this.closeWindow()}>No</button>
        </div>
        </div>
      </div>
    )
  }
}
export default ShowItems
