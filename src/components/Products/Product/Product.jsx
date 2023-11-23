import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={() => navigate("/product/"+id)}>
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.img?.data[0]?.attributes?.url
                    }
                />
            </div>
            <div className="pro-detail">
                <span className="nname">{data.title}</span>
                <span className="pprice">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;








