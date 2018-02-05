import React, {Component} from 'react'

class ItemDetails extends Component{
constructor(props){
    super(props)
}

    render(){
        const {itemInfo} = this.props
        console.log(itemInfo)
        return(
            <div className="inspectModalLayout">
                <h1>{itemInfo ? itemInfo.item_name : null}</h1>
                <img className="inspectModalImageSize" src={itemInfo ? itemInfo.item_picurl: null}   />
                <h3>{itemInfo ? "$".concat(itemInfo.item_price) : null}</h3>
                <h3>{itemInfo? itemInfo.item_description : null}</h3>
                <button> BUY </button>

                </div>

        )
    }
}
export default ItemDetails
