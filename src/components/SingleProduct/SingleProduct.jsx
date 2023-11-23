import "./SingleProduct.css";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import {
    FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from 'react-icons/fa';
import { useState ,useContext } from "react";
import prod from '../../assets/products/earbuds-prod-3.webp'
import  useFetch  from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity,setquantity] = useState(1)
    const {id} = useParams();
    const { handleAddToCart } = useContext(Context);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
   
    const decrement = () => {
        setquantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setquantity((prevState) => prevState + 1);
    };


    if (!data) return;
    const product = data?.data?.[0]?.attributes;


    return <div className="sppro">
        <div className="splayout">
            <div className="sppage">
                <div className="spleft">
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="spright">
                    <span className="spname">{product.title}</span>
                    <span className="spprice">&#8377;{product.price}</span>
                    <span className="spdesc">{product.decs}</span>

                    <div className="cart-btn">
                        <div className="quantity">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="addtocart"  onClick={() => {
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setquantity(1);
                                }}>
                            <FaCartPlus size={20}/>
                            ADD TO CART</button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-b">Catagory:<span> {
                                        product.categories.data[0].attributes
                                            .title
                                    }</span></span>
                    </div>
                    <div className="info-item">
                        <span>share:<span className="social-i"><FaFacebookF/> <FaInstagram/> <FaLinkedinIn/> <FaPinterest/> <FaTwitter/> </span></span>
                    </div>
                </div>

            </div>
            <RelatedProducts  productId={id}
                    categoryId={product.categories.data[0].id} />
        </div>
        </div>;
};

export default SingleProduct;
