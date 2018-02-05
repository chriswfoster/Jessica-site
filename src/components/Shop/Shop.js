import React, { Component } from "react"
import axios from "axios"
import ItemDetails from './ItemDetails'
import "./shop.css"
import Placeholder from "./../Home/slider/Placeholder.jpg"

class Shop extends Component {
  constructor() {
    super()
    this.state = {
      shopitems: [
        {
          item_name: "NO ITEMS LISTED",
          price: "0.00",
          picurl: Placeholder,
          showModal: "loginNOPE",
          itemToModify: {}
        }
      ]
    }
  }
  componentDidMount() {
    axios
      .get("/api/getallitems")
      .then(response => this.setState({ shopitems: response.data }))
  }
  getShopProducts() {
    axios.get("/api/getallproducts").then(response => console.log(response))
  }
  showItemModel(item) {
    this.state.showModal == "loginNOPE"
      ? this.setState({ showModal: "shopInspectModal", itemToModify: item })
      : this.setState({ showModal: "loginNOPE", itemToModify: {} })
  }

  render() {
    const { shopitems } = this.state
    const itemlist = shopitems.map((item, i) => (
      <div className="itemtileorganizer" onClick={() => this.showItemModel(item)}>
        <img src={item.item_picurl} className="shopImageSize" />
        <div>
          <p style={{ color: "violet" }}>Item: {item.item_name}</p>{" "}
          <p style={{ color: "red" }}>Price: ${item.item_price}</p>
        </div>
      </div>
    ))
    return (
      <div className="shopbackground">
        <div
          className={
            this.state.showModal == "loginNOPE"
              ? "loginNOPE"
              : "backgroundcloserimage"
          }
          onClick={() => this.showItemModel()}
        />
        Shop items go here.
        <div className="itemsorganizer">{itemlist}</div>
        <div className={this.state.showModal}>
        <ItemDetails itemInfo={this.state.itemToModify}/>
         </div>
      </div>
    )
  }
}
export default Shop
