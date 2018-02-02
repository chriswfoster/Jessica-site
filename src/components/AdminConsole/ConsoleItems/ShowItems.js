import React, { Component } from "react"
import axios from "axios"
import RemoveItem from './RemoveItem'


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

  removeItem(id){
    this.setState({itemToRemove: id, showRemoveModal: "displayRemoveItem"})
  }


  render() {
    const { itemslist } = this.state
    const displayList = itemslist.map((item, i) => (
      <div className="showitemstileorganizer showitemstileborder" key={i}>
        {/* This CSS class ^ is found in Shop's css file. */}
        <div onClick={() => this.removeItem(item.item_id)} className="showitemstileX"> X </div>
        <img src={item.item_picurl} className="showitemsimages" alt="No Image available"/>
        
          <p style={{ color: "white" }}>Item: {item.item_name}</p>
          <p style={{ color: "white" }}>Price: {item.item_price}</p>
          <p>Item Id: {item.item_id}</p>
          
       
      </div>
    ))
    return (
      <div>
        <div className="itemsorganizer showitemsoverflowcontrol">{displayList}</div>

<div className={this.state.showRemoveModal}>
        <RemoveItem toremove={this.state.itemToRemove}/>
</div>

      </div>
    )
  }
}
export default ShowItems
