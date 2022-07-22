import React, { Component } from 'react'
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus-disable.svg";
import "./ProductQty.scss"
export default class ProductQty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity||1,
      show: true,
      max: 5,
      min: 0
    };
  }
 
  IncrementItem = () => {
    this.setState(prevState => {
     
      if (prevState.quantity > 0) {
        this.props.onQuantity({ quantity: prevState.quantity + 1 });
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });

  }
  DecreaseItem = () => {
   
    this.setState(prevState => {
      
      if (prevState.quantity > 1) {
         this.props.decrQuantity({ quantity: prevState.quantity - 1 });
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return {quantity: prevState.quantity}
      }
    });
  }
   
  handleChange = (event) => {
    if (Number(event.target.value) > 1) {
      this.setState({ quantity: Number(event.target.value) });
      this.props.onQuantity({ quantity: Number(event.target.value) })
    } else {
      this.setState({ quantity: "" })
    }
  }



  render() {

    return (
      <>
          <div className='product-quantity'>
            <button className='decress-qty' onClick={() => this.DecreaseItem()} disabled={this.props.quantity<=1}>
              <img src={minus} alt="incress quantity" />
            </button>
            <span className='filedIcon'>
              <span className='filedIcon-input'>
                <input aria-label='Item quantity' inputMode='numric' min="1" pattern="[0-9]" className="quanityStripper" name="quantity" value={this.props.quantity>1?this.state.quantity> this.props.quantity?this.state.quantity:this.props.quantity:this.state.quantity} onChange={this.handleChange}></input>
              </span>
            </span>
            <button className='incress-qty' onClick={() => this.IncrementItem()}>
              <img src={plus} alt="incress quantity"  />
            </button>
          </div>
        </>
    )
  }
}
