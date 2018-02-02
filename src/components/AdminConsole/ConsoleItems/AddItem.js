import React, {Component} from 'react'


class AddItem extends Component {
constructor(){
    super()
    this.state = {
        nametext: "",
        descriptiontext: "",
        imageurltext: "",
        pricetext: 0.0
      }
    }
  
    nameTextHandler(val) {
      this.setState({ nametext: val })
    }
    descriptionTextHandler(val) {
      this.setState({ descriptiontext: val })
    }
    imageUrlTextHandler(val) {
      this.setState({ imageurltext: val })
    }
    priceTextHandler(val) {
      this.setState({ pricetext: val })
    }
  
    sendTheItem(nametext, descriptiontext, imageurltext, pricetext) {
      axios
        .post("/api/createItem", {
          item_name: nametext,
          item_description: descriptiontext,
          image_url: imageurltext,
          item_price: pricetext
        })
        .then(
          response => {
              this.setState({
                  nametext: "",
                  descriptiontext: "",
                  imagurltext: "",
                  pricetext: 0.0
                })
              }
        )
    }
    render(){
        return(
            <div>
               
               <form>
        <h1>ADD A NEW ITEM TO DATABASE:</h1>
        
        <span>
          {" "}
          <p>Type Item's Name:</p>{" "}
          <input
            placeholder="Type Item Name"
            onChange={e => this.nameTextHandler(e.target.value)}
            value={this.state.item_name}
          />
        </span>
        <span>
          <p>Type Item's Description:</p>
          <input
            placeholder="Type Item Description"
            onChange={e => this.descriptionTextHandler(e.target.value)}
            value={this.state.item_description}
          />
        </span>
        <span>
          <p>Type Item's Image URL:</p>
          <input
            placeholder="Copy/paste or type picture URL"
            onChange={e => this.imageUrlTextHandler(e.target.value)}
            value={this.state.image_url}
          />
        </span>
        <span>
          <p>Type Item's Price:</p>
          <input
            placeholder="100000.00"
            onChange={e => this.priceTextHandler(e.target.value)}
            value={this.state.item_price}
          />
        </span>
        <button
          onClick={() =>
            this.sendTheItem(
              this.state.nametext,
              this.state.descriptiontext,
              this.state.imageurltext,
              this.state.pricetext
            )
          }
        >
          SUBMIT
        </button>
        </form>
                </div>
        )
    }
}
export default AddItem 