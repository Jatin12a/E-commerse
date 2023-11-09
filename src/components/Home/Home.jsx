import "./Home.css";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return <div>
    <Banner/>
        <div className="homecontent">
            <div className="layout">
                <Category />
                <Products/>
            </div>
        </div>
    </div>;
};

export default Home;
