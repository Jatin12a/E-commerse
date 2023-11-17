import {MdClose} from 'react-icons/md';
import prod from '../../../assets/products/headphone-prod-5.webp'
import "./CartItem.css";
const CartItem = () => {
    return <div className='cart-pros'>
        <div className="cart-pro">
            <div className="img-cont">
                <img src={prod} alt="" />
            </div>
            <div className="prods-detail">
                <span className="cname">product name</span>
                <MdClose className='ce-btn'/>
                <div className="quantityy">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                </div>
                <div className="crtext">
                    <span>3</span>
                    <span>*</span>
                    <span className='hg'>&#8377;3435</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
