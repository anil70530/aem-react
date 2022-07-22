import React from 'react';
import CartDetail from '../../component/cart/CartDetail';
import { Payment } from '../../component/payment/Payment';
import arrow from '../../assets/images/chevron-right.svg'
import { connect } from 'react-redux';


const ProductCart = (props) => {
  const { addedItems, total } = props.cart;
  
  return (
    <section className='productCart'>
      <div className='productCart-heading'>
        <h1>
          Your Shopping Bag
        </h1>
        <div className='cart-border'></div>
      </div>
      <div className='productCart-wrapper'>
        <section>
          <div className='productCart-Content'>
          {addedItems && addedItems.map((res, idx) => (<CartDetail data={res} key={idx} />))}
          {addedItems.length === 0 && (<div className='product-cart-detail'>
            <div className='message-detail'>
             Your cart is empty
            </div>
          </div>)}
          </div>
         
          <div className='product-offer'>
            <section className='product-assibility'>
              <div className='offer-title'>Estimate your Shipping</div>
              <div className='offer-shipping'>
                <span>Shipping to 91001</span>
                <span className="toggle-arrow">
                  <img src={arrow} alt="" />
                </span>
              </div>
            </section>
            <section className='product-assibility'>
              <div className='offer-title'>Enter a Coupon Code</div>
              <div className='offer-shipping'>
                <span>20% discount applied</span>
                <span className="toggle-arrow">
                  <img src={arrow} alt="" />
                </span>
              </div>
            </section>
            <section className='product-assibility'>
              <div className='offer-title'>Apply Gift Card</div>
              <div className='offer-shipping'>
                <span></span>
                <span className="toggle-arrow">
                  <img src={arrow} alt="" />
                </span>
              </div>
            </section>
          </div>
        </section>
        <section>
          <Payment  totalPrice={total} />
        </section>
      </div>

    </section>
  )
}
const mapStateToProps = ({ cart }) => ({
  cart
});
export default connect(mapStateToProps, {

})(ProductCart);