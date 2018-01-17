import React, {Component} from 'react'
import Placeholder from './../Home/slider/Placeholder.jpg'

import './art.css'


class Art extends Component {
constructor(){
    super()
    this.state = {
        artitems: [
            {
                itemname: "item1",
                picurl: Placeholder,
                itemdescription: " I think this is where you wanted a description? Not sure really."
            },{
                itemname: "item2",
                picurl: Placeholder,
                itemdescription: " I think this is where you wanted a description? Not sure really."
            },{
                itemname: "item3",
                picurl: Placeholder,
                itemdescription: " I think this is where you wanted a description? Not sure really."
            },{
                itemname: "item4",
                picurl: Placeholder,
                itemdescription: " I think this is where you wanted a description? Not sure really."
            },{
                itemname: "item5",
                picurl: Placeholder,
                itemdescription: " I think this is where you wanted a description? Not sure really."
            },
        ]
    }
}
    render(){
        const {artitems} = this.state
        const artlist = artitems.map((item, i) => (
            <div className="artlistcolumn">
                <p style={{color: 'violet'}}>{item.itemname}</p>
                <img src={Placeholder}/>
                <p style={{color: 'red'}}>{item.itemdescription}</p>
                </div>
        ))

        return(
            <div className="shopbackground">
                Art stuff here
            <div className="artlistcolumn">
                {artlist}
                </div>



            </div>
        )
    }
}
export default Art