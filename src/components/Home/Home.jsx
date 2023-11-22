import { useEffect , useContext } from "react";

import "./Home.css";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    const { Categories ,setCategories ,products, setProducts} = useContext(Context);
    useEffect(()=>{
       getProducts();
        getCategories();
    },[])
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {setCategories(res)})
        
    };

    return <div>
    <Banner/>
        <div className="homecontent">
            <div className="layout">
                <Category categories={Categories} />
                <Products products={products} headingtext='Popular product'/>
            </div>
        </div>
    </div>;
};

export default Home;
