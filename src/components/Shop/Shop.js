import React, {Component} from 'react'
import axios from 'axios'
import './shop.css'
import Placeholder from './../Home/slider/Placeholder.jpg'

class Shop extends Component {
constructor(){
    super()
    this.state ={
        shopitems: [
            {item_name: "NO ITEMS LISTED",
            price: "0.00",
            picurl: Placeholder}
            
        ]

    }
}
componentDidMount(){
    axios.get('/api/getallitems')
    .then(response => this.setState({shopitems: response.data}))
}
getShopProducts(){
    axios.get("/api/getallproducts")
    .then(response => console.log(response))
}

    render(){
        const {shopitems} = this.state
        const itemlist = shopitems.map((item, i) => (
            <div className="itemtileorganizer">
            
                <img src={item.item_picurl} className="shopImageSize"/>
                <div><p style={{color: 'violet'}}>Item: {item.item_name}</p> <p style={{color: 'red'}}>Price: {item.item_price}</p></div>
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