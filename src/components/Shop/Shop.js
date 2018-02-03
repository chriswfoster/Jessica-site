import React, {Component} from 'react'
import axios from 'axios'
import './shop.css'
import Placeholder from './../Home/slider/Placeholder.jpg'

class Shop extends Component {
constructor(){
    super()
    this.state ={
        shopitems: [
            {itemname: "NO ITEMS LISTED",
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