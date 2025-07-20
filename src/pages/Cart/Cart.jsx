import React from 'react'
import './Cart.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Monitor from '../../assets/images/monitor.png'
import { AiFillCloseCircle } from 'react-icons/ai'
const Cart = () =>{
return(
    <div className='cart-wrapper'>
        <div className="path">
            <p>Home</p>
            <span>/</span>
            <p>Cart</p>
        </div>
        <div className="cart-details">
            <div className="cart-title">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className="cart-items">
                <div className='product-col'>
                    <div className="cart-item-img">
                        <img src={Monitor} alt="" />
                        <AiFillCloseCircle className='close-icon'/>
                    </div>
                    <div className="cart-item-name">
                        LCD Monitor

                    </div>
                </div>
                <div className="price-col">$650</div>
                <div className="quantity-col">
                    <input type="number" />
                </div>
                <div className="subtotal-col">$650</div>

            </div>

        </div>
        <div className="return-update">
            <button>Return To Shop</button>
            <button>Update Cart</button>
        </div>
        <div className="coupon-cartTotal">
            <div className="code-apply">
                <input type="text" placeholder='Coupon Code'/>
                <button>Apply Coupon</button>
            </div>
            <div className="cart-total">
                <p>Cart Total</p>
                <div className="subtotal-div">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="shipping">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>$1750</p>
                </div>
                <div className="process_button">
                    <button className='proces'>Procees to checkout</button>
                </div>
                
            </div>
        </div>

    </div>
)
}
export default Cart