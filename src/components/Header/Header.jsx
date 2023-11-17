import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 

import { TbSearch } from "react-icons/tb"; 
import { CgShoppingCart } from "react-icons/cg"; 
import { AiOutlineHeart } from "react-icons/ai"; 

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";



import "./Header.css";

import { setSelectionRange } from "@testing-library/user-event/dist/utils";
const Header = () => {
    const [addData,setaddData]=useState(false);
    const logginn=useNavigate();
    const loginn = ()=>{
        logginn("/login")
        setaddData(true)
       
    }
    const logout = ()=>{
        logginn('/login')
        setaddData(false)
    }


    const [scroll,setscroll]=useState(false);
    const [showcart,setshowcart]=useState(false);
    const [showsearrch,setshowsearch]=useState(true);
    const handlescroll=()=>{
        const offset = window.scrollY
        if(offset>200){
            setscroll(true);
        }
        else{
            setscroll(false);
        }
    }


    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
    },[])
    return(
       <> <header className={`nav ${scroll?'sticky':''}`}>
            <div className="navbar">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Catagories</li>
                </ul>
                <div className="center">SHOPPING</div>
                <div className="right">
                    <TbSearch onClick={()=>{setshowsearch(true)}} />
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={()=>{setshowcart(true)}}>
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                    {setaddData ? <button onClick={logout}>logout</button> :<button onClick={loginn}>login</button> }
                    
                </div>
            </div>
        </header>
        { showcart && <Cart setShowcart={setshowcart}/>}
        {showsearrch && <Search setshowsearch={setshowsearch} />}
        </>
    )
};

export default Header;
