import "./Category.css";
import Products from '../Products/Products'
const Category = () => {
    return <div className="catagory-main-cont">
        <div className="layout">
            <div className="cata-title">
                Category title
            </div>
            <Products innerPage={true}/>
        </div>
    </div>;
};

export default Category;
