import React, { Component } from "react"
import axios from 'axios'

import "./adminconsole.css"

class AdminConsole extends Component {
    constructor(){
        super()
        this.state={
            titletext: "",
            descriptiontext: "",
            imageurltext:"",
            pricetext: 0
        }
    }

titleTextHandler(val){
    this.setState({titletext: val})
}
descriptionTextHandler(val){
    this.setState({descriptiontext: val})
}
imageUrlTextHandler(val){
    this.setState({imageurltext: val})
}
priceTextHandler(val){
    this.setState({pricetext: val})
}

sendTheItem(){
    axios.post('/api/createItem')
    .then(response => console.log(response))
}


  render() {
    return (
      <div className="adminconsolebg">
      <h1>ADD A NEW ITEM TO DATABASE:</h1>
      <span> <p>Type Item's Title:</p> <input placeholder="Type Item Title" onChange={(e) => this.titleTextHandler(e.target.value)} /></span>
        <span><p>Type Item's Description:</p>
        <input placeholder="Type Item Description" onChange={(e) => this.descriptionTextHandler(e.target.value)}/></span>
        <span><p>Type Item's Image URL:</p>
        <input placeholder="Copy/paste or type picture URL" onChange={(e) => this.imageUrlTextHandler(e.target.value)}/></span>
        <span><p>Type Item's Price:</p>
        <input placeholder="100000.00" onChange={(e) => this.priceTextHandler(e.target.value)}/></span>
        <button onClick={() => this.sendTheItem()}>SUBMIT</button>
      </div>
    )
  }
}
export default AdminConsole
