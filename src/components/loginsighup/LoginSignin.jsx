import React, { useState } from 'react';
import './LoginSignin.css';
import user_icon from "../../assets/person.png";
import email_login from "../../assets/email.png";
import { NavLink, useNavigate } from 'react-router-dom';
import password_icon from "../../assets/password.png";
const Loginsignin=()=>{

    const history=useNavigate();


    const [inpval,setinpval] = useState({
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

        const getdataArr = localStorage.getItem("useryoutube");
        console.log(getdataArr);
        const {email,password} = inpval;
        
            if(email === "") {
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
                if(getdataArr && getdataArr.length){
                    const userdata= JSON.parse(getdataArr);
                    const userlogin= userdata.filter((el,k)=>{
                        return el.email===email && el.password===password
                    });
                    if(userlogin.length===0){
                        alert("Invalid details")
                    }
                    else{
                        console.log("User login successfully");
                        history("/")
                    }
                    }
                }
              }
    
    return(
        <div className='container'>
            <div className='header'>
                <div className='login-text'>Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            

                <div className="input">
                    <img src={email_login} alt="" />
                    <input type="email" name='email' onChange={getdata} placeholder='Email ID' />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name='password' onChange={getdata} placeholder='Password' />
                </div>
            </div>
            <div className="forgot">Dont have Account  <span><NavLink to="/signup">Sign Up!</NavLink> </span></div>
            <div className="submit-cont">
                <button className="submit" onClick={addData}>Login</button>
                
            </div>
        </div>
    )


}

export default Loginsignin;