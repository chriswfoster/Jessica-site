import React, {Component} from 'react'
import axios from 'axios'
import './shop.css'
import Placeholder from './../Home/slider/Placeholder.jpg'

class Shop extends Component {
constructor(){
    super()
    this.state ={
        shopitems: [
            {itemname: "shoes",
            price: "33.55",
            picurl: Placeholder},
            {itemname: "shoes",
            price: "33.55",
            picurl: Placeholder},
            {itemname: "shoes",
            price: "11.18",
            picurl: Placeholder},
            {itemname: "shoes",
            price: "3.55",
            picurl: Placeholder},
            {itemname: "Shirts",
            price: "55.83",
            picurl: Placeholder},
            {itemname: "pants",
            price: "5.00",
            picurl: Placeholder}
        ]

    }
}
getShopProducts(){
    axios.get("/api/getallproducts")
    .then(response => console.log(response))
}

    render(){
        const {shopitems} = this.state
        const itemlist = shopitems.map((item, i) => (
            <div className="itemtileorganizer">
            
                <img src={Placeholder}/>
                <div><p style={{color: 'violet'}}>Item: {item.itemname}</p> <p style={{color: 'red'}}>Price: {item.price}</p></div>
                </div>
        ))
        return(
            <div className="shopbackground">
                Shop items go here.
                <div className="itemsorganizer">
                {itemlist}
                </div>
                </div>
        )
    }
}
export default Shop