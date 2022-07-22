import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addCart, deleteItem,decreaseItem } from '../../store/action';
import currencyFormat from '../../utils/currency';
import ProductQty from '../quantity/ProductQty'
import "./cartdetail.scss";

const CartDetail = (props) => {
const [isSideActive,setIsSideActive]=useState(0);
  const { id, image, title, price, quantity,color,size } = props['data'];
  const remove = async (id) => {
    let item = {
      id, price
    }
    await props.deleteItem(item)
  }
   const actionClick=(id)=>{
    setIsSideActive(id);
   }
  const addQuantity = async (event) => {
    debugger;
    const data = {
      id: id,
      image: image,
      price: price,
      title: title,
      color:color,
      size:size,
      quantity: event['quantity']
    }
    await props.addCart(data)
  }
  const decreaseQantity=async(event)=>{
    debugger;
    const data = {
      id: id,
      image: image,
      price: price,
      title: title,
      color:color,
      size:size,
      quantity: event['quantity']
    }
    await props.decreaseItem(data)
  }
  const close=(item)=>{
    setIsSideActive(item);
  }

  return (
    <div className='product-cart-detail'>
      <div className='product-container'>
        <div className='product-image'>
          <img src={image} alt={title} />
        </div>
        <div className='product-detail'>
          <h3 className='product-title'>{title}</h3>
           <span className='action-event' onClick={()=>actionClick(id)}>...</span>
          <div className='product-wrapper'>
            <div className='product-vareation'>
              <p className='prodinfo product-size'>Size:{size}</p>
              <p className='prodinfo product-color'>color:{color}</p>
              <p className='prodinfo product-price'>{currencyFormat(price)}</p>
            </div>
            <div className='product-qty'>
              <ProductQty quantity={quantity}  decrQuantity={decreaseQantity} onQuantity={addQuantity} key={id}/>
            </div>
            <div className={`product-action ${isSideActive===id?"active-action":id}`}>
              <div className='close' onClick={()=>close(0)}>x</div>
              <div className='product-edit' >
                <span className='edit-item'></span>Edit item
              </div>
              <div className='product-edit' onClick={() => remove(id)}>
                <span className='remove-item'></span>Remove
              </div>
              <div className='product-edit'>
                <span className='save-item'></span>Save for letter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = ({ product }) => ({

});
export default connect(mapStateToProps, {
  addCart,
  deleteItem,
  decreaseItem
})(CartDetail);