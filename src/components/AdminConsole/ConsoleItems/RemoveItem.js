import React, {Component} from 'react'



class RemoveItem extends Component{
constructor(){
    super()
    this.state={
        
        
    }
}

deleteItem(){
    const {toremove} = this.props
    console.log(toremove)
}


    render(){
        const {toremove} = this.props
        return(
            <div>
                <div
          className={this.state.showModal}
          onClick={() => this.displayModalHandler()}
        >
          <div> DELETE ITEM ID#{toremove}</div>
      <button onClick={()=> this.deleteItem()}>YES</button><button>No</button>
        </div>
                </div>
        )
    }
}
export default RemoveItem