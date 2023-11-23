import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-4.webp'
import { useState } from 'react';
import "./Search.css";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'

const Search = ({setshowsearch}) => {
    const [query , setquery] = useState("");
    const navigate = useNavigate()

    const onchange = (e)=>{
        setquery(e.target.value);
    }

    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    if (!query.length) {
        data = null;
    }
    

    return <div className='search-modal'>
        <div className="form-field">
            <input className='ssinputt' type="text" autoFocus placeholder='search here' 
            value={query} onChange={(onchange)} />
        <MdClose className='clos-btn' onClick={()=>{setshowsearch(false)}}/>
        </div>
        <div className="search-result">
            <div className="results">
                {data?.data?.map(item =>(
                     <div key={item.id} 
                     onClick={() => {
                        navigate("/product/"+item.id);
                        setshowsearch(false);}}
                     className="search-item">
                    <div className="ssimg-cont">
                    <img src={process.env
                            .REACT_APP_STRIPE_APP_DEV_URL +
                            item.attributes.img.data[0].attributes
                            .url} alt="" />
                    </div>
                    <div className="ssprods-detail">
                        <span className="ssname">{item.attributes.title}</span>
                        <span className="ssdesc">{item.attributes.decs}</span>
                    </div>
                    </div>
                    ))}
               
                
            </div>
        </div>
    </div>;
};

export default Search;
