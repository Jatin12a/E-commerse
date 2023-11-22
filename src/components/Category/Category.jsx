import { useParams } from "react-router-dom";
import "./Category.css";
import Products from '../Products/Products'
import useFetch from "../../hooks/useFetch.js";
const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    return <div className="catagory-main-cont">
        <div className="layout">
            <div className="cata-title">
                { data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title}
            </div>
            <Products innerPage={true} products={data}/>
        </div>
    </div>;
};

export default Category;
