import "./Products.css";
import Product from './Product/Product'
const Products = ({ innerPage }) => {
    return <div className="pro-cont">
        {!innerPage && <div className="sec-heading">Section heading</div>}
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
