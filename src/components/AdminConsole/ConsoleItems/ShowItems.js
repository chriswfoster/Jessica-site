import React, { Component } from "react"
import axios from "axios"
import RemoveItem from "./RemoveItem"

class ShowItems extends Component {
  constructor() {
    super()
    this.state = {
      itemslist: [],
      itemToRemove: 0,
      showRemoveModal: "loginNOPE"
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
    const { itemToRemove, itemslist } = this.state
    const temparray = itemslist
    axios.post("/api/removeItem", {
      item_id: itemToRemove
    })
    for (var i = 0; i < temparray.length; i++) {
      if (temparray[i].item_id === itemToRemove) {
        temparray.splice(i, 1)
      }
      this.setState({ itemslist: temparray })
    }
    this.closeWindow()
  }
  closeWindow() {
    this.setState({ showRemoveModal: "loginNOPE" })
  }

  render() {
    const { itemslist } = this.state
    const displayList = itemslist.map((item, i) => (
      <div className="adminconsoleitemsorganize showitemstileborder" key={i}>
        {/* This CSS class ^ is found in Shop's css file. */}
        <div>
          <p
            onClick={() => this.removeItem(item.item_id)}
            className="showitemstileX"
          >
            X
          </p>
          <img
            src={item.item_picurl}
            className="showitemsimages"
            alt="No Image available"
          />
          <table>
            <tr>
              <th>
                <p style={{ color: "red" }}>Item:</p>
              </th>
              <th>
                <p style={{ color: "red" }}>Price:</p>{" "}
              </th>
              <th>
                <p style={{ color: "red" }}>Item Id:</p>{" "}
              </th>
            </tr>
            <tr>
              <td>
                <p style={{ color: "white" }}>{item.item_name}</p>
              </td>
              <td>
                <p style={{ color: "white" }}>${item.item_price}</p>
              </td>
              <td>
                <p>{item.item_id}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    ))
    return (
      <div>
        <div className="showitemsorganizer showitemsoverflowcontrol">
          {displayList}
        </div>

        <div className={this.state.showRemoveModal}>
          <div className="removeitemmodal">
            <h1 style={{color: "red"}}> DELETE ITEM ID#: {this.state.itemToRemove}</h1>
            <button onClick={() => this.deleteItem()}>YES</button>
            <button onClick={() => this.closeWindow()}>No</button>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowItems
