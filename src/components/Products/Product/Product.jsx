import "./Product.css";
import prod from '../../../assets/products/earbuds-prod-5.webp'
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="pro-detail">
            <span className="nname">name</span>
            <span className="pprice">&#8377;999</span>
        </div>
    </div>;
};

export default Product;
