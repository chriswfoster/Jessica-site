import React, { Component } from "react"
import axios from "axios"
class ShowItems extends Component {
  constructor() {
    super()
    this.state = {
      itemslist: []
    }
  }

  componentDidMount() {
    axios.get("/api/getallitems").then(response => {
      console.log(response)
      this.setState({ itemslist: response.data })
    })
  }
  render() {
    const { itemslist } = this.state
    const displayList = itemslist.map((item, i) => (
      <div className="itemtileorganizer showitemstileborder" key={i}>
        {/* This CSS class ^ is found in Shop's css file. */}
        <img src={item.item_picurl} className="showitemsimages" alt="No Image available"/>
        
          <p style={{ color: "violet" }}>Item: {item.item_name}</p>
          <p style={{ color: "red" }}>Price: {item.item_price}</p>
       
      </div>
    ))
    return (
      <div>
        <div className="itemsorganizer showitemsoverflowcontrol">{displayList}</div>
      </div>
    )
  }
}
export default ShowItems
