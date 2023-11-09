import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from "../../assets/person.png";
import email_login from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import {NavLink, useNavigate} from 'react-router-dom';
// import Login from './LoginSignin'
const Loginsighup=()=>{
  const  history=useNavigate();
    const [inpval,setinpval] = useState({
        username:"",
        email:"",
        password: ""
     } );
     const [data,setData]=useState([]);
    console.log(inpval);
   
    const getdata = (e)=>{
        // console.log(e.target.value);
        const {value,name} = e.target;
        // console.log(value,name);

        setinpval(()=>{
            return{
                    ...inpval,[name]:value
            }
        })
    }
    const addData = (e)=>{
        e.preventDefault();
        const {username,email,password} = inpval;
        if(username === ""){
            alert("name field is requred")
            }
            else if(email === "") {
            alert("email field is requred")
            }
            else if(!email.includes("@")){
            alert("plz enter valid email addres")
            }
            else if( password === "") {
            alert("password field is requred")
            }
            else if(!password.includes("@","1","2","3","4","5","6","7","8","9","0")){
                alert("plz use @ in password")
                }
            else if(password.length < 8)
            {
            alert("password length greater Eight")
            }
            else{
            console.log("data added successfully");

            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
            history("/Login")
            }

    }
    return(
        <div className='container'>
            <div className='header'>
                <div className='login-text'>Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" name='username' onChange={getdata} placeholder='Username' />
                </div>

                <div className="input">
                    <img src={email_login} alt="" />
                    <input type="email" name='email' onChange={getdata} placeholder='Email ID' />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name='password' onChange={getdata} placeholder='Password' />
                </div>
            </div>
            <div className="forgot">Already have Account <span> <NavLink to="/Login">Login Here!</NavLink></span></div>
            <div className="submit-cont">
                <button className="submit" onClick={addData}>Sign Up</button>
                
            </div>
        </div>
    )


}

export default Loginsighup;