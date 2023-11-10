import "./SingleProduct.css";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import {
    FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from 'react-icons/fa';

import prod from '../../assets/products/earbuds-prod-3.webp'
const SingleProduct = () => {
    return <div className="sgpro">
        <div className="splayout">
            <div className="sppage">
                <div className="spleft">
                    <img src={prod} alt="" />
                </div>
                <div className="spright">
                    <span className="spname">Name</span>
                    <span className="spprice">Price</span>
                    <span className="spdesc">About me</span>

                    <div className="cart-btn">
                        <div className="quantity">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="addtocart">
                            <FaCartPlus size={20}/>
                            ADD TO CART</button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-b">Catagory:<span>headphone</span></span>
                    </div>
                    <div className="info-item">
                        <span>share:<span className="social-i"><FaFacebookF/> <FaInstagram/> <FaLinkedinIn/> <FaPinterest/> <FaTwitter/> </span></span>
                    </div>
                </div>

            </div>
        </div>
        </div>;
};

export default SingleProduct;
