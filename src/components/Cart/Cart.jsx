import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';
import CartItem from './CartItem/CartItem'
import "./Cart.css";
const Cart = ({setShowcart}) => {
    return <div className='cart-panel'>
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping cart</span>
                <span className="close-btn" onClick={()=>{setShowcart(false)}}>
                    <MdClose/>
                <span className="cltext">close</span>
                </span>
            </div>
            {/* <div className="empty">
                <BsCartX/>
                <span>No product in the cart.</span>
                <button className='return-btn'>Return</button>
            </div> */}
            <>
            <CartItem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="ftext">Subtotal:</span>
                    <span className="total">&#8377;12234</span>
                </div>
                <div className="cfbtn">
                    <button className='checkout'>Checkout</button>
                </div>
            </div>
            </>
        </div>
    </div>
};

export default Cart;
