import React from 'react'
import paypal from "../../assets/images/PP_BTN.png";
import currencyFormat from '../../utils/currency';
export const Payment = (props) => {
    
    return (
        <div className='prod-payment'>
            <div className='product-detail'>
                <div className='product-title n-b'>Pricing Summary</div>
                <div className='product-price-bill'>
                    <div className='product-price-list'>
                        <span className='price-info'>Subtotal</span>

                        <span className='pro-price'>{currencyFormat(props.totalPrice)}</span>
                    </div>
                    <div className='product-price-list'>
                        <span className='price-info'>Coupon</span>
                        <span className='pro-price'>{currencyFormat(0)}</span>
                    </div>
                    <div className='product-price-list'>
                        <span className='price-info'>Gift Card</span>
                        <span className='pro-price'>{currencyFormat(0)}</span>
                    </div>
                    <div className='product-price-list'>
                        <span className='price-info'>Estimated tax</span>
                        <span className='pro-price'>{currencyFormat(0)}</span>
                    </div>
                    <div className='product-price-list'>
                        <span className='price-info'>Estimated shipping</span>
                        <span className='pro-price'>{currencyFormat(0)}</span>
                    </div>
                    <div className='product-price-list'>
                        <span className='price-info n-b'>Estimated Total</span>
                        <span className='pro-price n-b'>{currencyFormat(props.totalPrice)}</span>
                    </div>
                </div>
            
            </div>
             <div className='product-action'>
                <button className='btn-payment'>Checkout</button>
                 <button className='btn-paypal'>
                    <img src={paypal} alt="payment" />
                 </button>
             </div>

        </div>
    )
}
