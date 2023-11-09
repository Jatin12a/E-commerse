import "./Category.css";
import cat1 from '../../../assets/category/cat-1.jpg'
const Category = () => {
    return <div className="shop">
        <div className="catagories">
            <div className="catagory">
                <img src={cat1} alt="" />
            </div>
            <div className="catagory">
                <img src={cat1} alt="" />
            </div>
            <div className="catagory">
                <img src={cat1} alt="" />
            </div>
            <div className="catagory">
                <img src={cat1} alt="" />
            </div>
        </div>
    </div>;
};

export default Category;
