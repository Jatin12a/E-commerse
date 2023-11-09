import "./Products.css";
import Product from './Product/Product'
const Products = () => {
    return <div className="pro-cont">
        <div className="sec-heading">
            Section heading</div>
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
