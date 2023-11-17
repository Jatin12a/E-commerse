import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-4.webp'

import "./Search.css";
const Search = ({setshowsearch}) => {
    return <div className='search-modal'>
        <div className="form-field">
            <input type="text" autoFocus placeholder='search here' />
        <MdClose className='clos-btn' onClick={()=>{setshowsearch(false)}}/>
        </div>
        <div className="search-result">
            <div className="results">
                <div className="search-item">
                    <div className="ssimg-cont">
                    <img src={prod} alt="" />
                    </div>
                    <div className="ssprods-detail">
                        <span className="ssname">product name</span>
                        <span className="ssdesc">product desc</span>
                    

                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
