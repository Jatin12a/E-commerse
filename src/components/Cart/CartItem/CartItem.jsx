import {MdClose} from 'react-icons/md';
import prod from '../../../assets/products/headphone-prod-5.webp'
import "./CartItem.css";
import { Context } from '../../../utils/context';
import React, { useContext } from "react";
const CartItem = () => {

    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

return <div className='cart-pros'>
      {cartItems?.map((item) => ( 
      <div className="cart-pro"
        key={item.id}
        onClick={() => {}}>
            <div className="img-cont">
                <img src={ process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prods-detail">
                <span className="cname">{item.attributes.title}</span>
                <MdClose className='ce-btn'
                  onClick={() => handleRemoveFromCart(item)}/>
                <div className="quantityy">
                            <span
                            onClick={() =>
                            handleCartProductQuantity("dec", item)}>
                                -</span>
                            <span>{item.attributes.quantity}</span>
                            <span 
                            onClick={() =>
                            handleCartProductQuantity("inc", item)}>
                                +</span>
                </div>
                <div className="crtext">
                    <span>{item.attributes.quantity}</span>
                    <span>*</span>
                    <span className='hg'>&#8377; {item.attributes.price *
                                    item.attributes.quantity}</span>
                </div>
            </div>
        </div>
      ))}
    </div>;
};

export default CartItem;
