import React from "react"

class Product extends React.Component {

  render() {
    return (
      <div className="guestbookItemContainer">
        <p>{this.props.message}</p>
        <h5>- {this.props.author}</h5>
      </div>
    )
  }

}

export default Product;
