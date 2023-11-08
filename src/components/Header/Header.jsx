import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 

import { TbSearch } from "react-icons/tb"; 
import { CgShoppingCart } from "react-icons/cg"; 
import { AiOutlineHeart } from "react-icons/ai"; 

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";



import "./Header.css";
const Header = () => {

    const logginn=useNavigate();
    const loginn = ()=>{
        logginn("/login")
    }


    const [scroll,setscroll]=useState(false);
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
        <header className={`nav ${scroll?'sticky':''}`}>
            <div className="navbar">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Catagories</li>
                </ul>
                <div className="center">SHOPPING</div>
                <div className="right">
                    <TbSearch />
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                    <button onClick={loginn}>Login</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
