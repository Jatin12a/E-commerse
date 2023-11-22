import React from "react";
import {FaFacebookF,
        FaTwitter,
        FaInstagram,
        FaLinkedinIn} from "react-icons/fa";
import "./Newsletter.css";
const Newsletter = () => {
    return <div className="newsletter">
        <div className="news">
            <span className="sm-text">Newsletter</span>
            <span className="bgtext">Sign Up for latest Updates and offers</span>
            <div className="form">
                <input className="nsinput" type="text" placeholder="Email adresss"/>
                <button>Subscibe</button>
            </div>
            <div className="news-text">Will be Used in accordance With Our Privacy Policy</div>
            <div className="icons">
                <div className="icon">
                    <FaFacebookF/>
                </div>
                <div className="icon">
                    <FaInstagram/>
                </div>
                <div className="icon">
                    <FaTwitter/>
                </div>
                <div className="icon">
                    <FaLinkedinIn/>
                </div>
                    
            </div>
        </div>
    </div>;
};

export default Newsletter;
