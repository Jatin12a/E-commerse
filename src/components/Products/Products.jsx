import "./Products.css";
import Product from './Product/Product'
const Products = ({ innerPage , headingtext }) => {
    return <div className="pro-cont">
        {!innerPage && <div className="sec-heading">{headingtext}</div>}
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
    </div>;
};

export default Products;
