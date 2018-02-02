import React, { Component } from "react"
import axios from "axios"

import "./adminconsole.css"

class AdminConsole extends Component {
  constructor() {
    super()
    this.state = {
      nametext: "",
      descriptiontext: "",
      imageurltext: "",
      pricetext: 0
    }
  }

  nameTextHandler(val) {
    this.setState({ nametext: val })
  }
  descriptionTextHandler(val) {
    this.setState({ descriptiontext: val })
  }
  imageUrlTextHandler(val) {
    this.setState({ imageurltext: val })
  }
  priceTextHandler(val) {
    this.setState({ pricetext: val })
  }

  sendTheItem(nametext, descriptiontext, imageurltext, pricetext) {
    axios
      .post("/api/createItem", {
        item_name: nametext,
        item_description: descriptiontext,
        image_url: imageurltext,
        item_price: pricetext
      })
      .then(response => console.log(response))
  }

  render() {
    return (
      <div className="adminconsolebg">
        <h1>ADD A NEW ITEM TO DATABASE:</h1>
        <span>
          {" "}
          <p>Type Item's Name:</p>{" "}
          <input
            placeholder="Type Item Name"
            onChange={e => this.nameTextHandler(e.target.value)}
          />
        </span>
        <span>
          <p>Type Item's Description:</p>
          <input
            placeholder="Type Item Description"
            onChange={e => this.descriptionTextHandler(e.target.value)}
          />
        </span>
        <span>
          <p>Type Item's Image URL:</p>
          <input
            placeholder="Copy/paste or type picture URL"
            onChange={e => this.imageUrlTextHandler(e.target.value)}
          />
        </span>
        <span>
          <p>Type Item's Price:</p>
          <input
            placeholder="100000.00"
            onChange={e => this.priceTextHandler(e.target.value)}
          />
        </span>
        <button
          onClick={() =>
            this.sendTheItem(
              this.state.nametext,
              this.state.descriptiontext,
              this.state.imageurltext,
              this.state.pricetext
            )
          }
        >
          SUBMIT
        </button>
      </div>
    )
  }
}
export default AdminConsole
