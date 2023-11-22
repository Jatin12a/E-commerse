import {useNavigate} from 'react-router-dom';
import "./Category.css";

const Category = ({categories}) => {
    const navigate = useNavigate();
    return( <div className="shop">
        <div className="catagories">
        {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="catagory" 
                        onClick={()=>navigate(`/Category/${item.id}`)}
                    >
                    <img
                        src={
                            process.env.REACT_APP_STRIPE_APP_DEV_URL +
                            item.attributes?.img?.data?.attributes?.url
                        }
                    />
                    </div>
                ))}
            
           
        </div>
    </div>
    );
};

export default Category;


