import React from 'react';
import {FaLocationArrow , FaMobileAlt, FaEnvelope} from 'react-icons/fa';
import Payment from '../../assets/payments.png'
import "./Footer.css";
const Footer = () => {
    return <footer className='footers'>
        <div className="footer">
            <div className="col">
                <div className="ftitle">About</div>
                    <div className="ftext">
                        Lorem ipsum dolor sit amet
                         consectetur adipisicing elit. Quam similique
                        ut velit facere magnam 
                        possimus id quisquam. Dolor, repellendus ratione!
                    </div>
            </div>
            <div className="col">
                <div className="ftitle">Content</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="c-text">Lorem ipsum dolor sit amet consectetur.</div>

                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="c-text">Phone: 100 911 119</div>
                    
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="c-text">Email: imtheone@whoareyou.com</div>
                    
                </div>
            </div>
            <div className="col">
                <div className="ftitle">Catogies</div>
                <div className="cat-text">Headphone</div>
                <div className="cat-text">Menu Item 1</div>
                <div className="cat-text">Menu Item 1</div>
                <div className="cat-text">Menu Item 1</div>
                <div className="cat-text">Menu Item 1</div>
                <div className="cat-text">Menu Item 1</div>
            </div>
            <div className="col">
                <div className="ftitle">Pages</div>
                <div className="cat-text">home</div>
                <div className="cat-text">About</div>
                <div className="cat-text">Privacy</div>
                <div className="cat-text">returns</div>
                <div className="cat-text">T&C</div>
                <div className="cat-text">Contact Us</div>
            </div>
        </div>
        <div className="bar">
            <div className="bar-cont">
                <div className="bar-text">
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
