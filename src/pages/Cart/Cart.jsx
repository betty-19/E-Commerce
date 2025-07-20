import React from 'react'
import './Cart.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Monitor from '../../assets/images/monitor.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';

const Cart = () =>{

    const cartItems = useSelector(state => state.cart.items);
const dispatch = useDispatch();
const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shippingCost = 0; // Free shipping
const total = subtotal + shippingCost;

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
            {cartItems.map(item => (
  <div className="cart-items" key={item.id}>
   <label className='mob-view'>Product:</label> <div className='product-col'>
      <div className="cart-item-img">
        <img src={item.image} alt="" />
        <AiFillCloseCircle
          className='close-icon'
          onClick={() => dispatch(removeFromCart(item.id))}
        />
      </div>
     <div className="cart-item-name">{item.name}</div>
    </div>
   <label className='mob-view'>Price:</label> <div className="price-col">${item.price}</div>
    <label className='mob-view'>Quantity:</label><div className="quantity-col">
      <input
        type="number"
        value={item.quantity}
        onChange={(e) =>
          dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
        }
        min="1"
      />
    </div>
   <label className='mob-view'>Subtotal:</label> <div className="subtotal-col">${item.price * item.quantity}</div>
  </div>
))}


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
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="shipping">
                    <p>Shipping:</p>
                    <p>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
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