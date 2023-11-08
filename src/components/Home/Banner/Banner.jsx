import "./Banner.css";
import Bannerimg from '../../../assets/banner-img.png'
const Banner = () => {
    return <div className="banner">
        <div className="content">
            <div className="text">
                <h1>SALES</h1>
                <p>
                    Convallus ubterdun purus adispsincd dus partyrbtin
                    funtur cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid
                    non proident, sunt i
                </p>
                <div className="ctas">
                    <div className="btn">Read More</div>
                    <div className="btn v2">Shop Now</div>
                </div>
            </div>
            <img className="image" src={Bannerimg} alt=''/>
        </div>
        </div>;
};

export default Banner;
