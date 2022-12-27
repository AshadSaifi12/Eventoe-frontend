import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../App.css';


const Esignin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const arr = {  email, password }
    let handleMouse=(id)=>{
        const element=document.getElementById(id);
        element.style.backgroundColor="white";
        element.style.color="cadetblue";
    }
    let handleDown=(id)=>{
        const element=document.getElementById(id);
        element.style.backgroundColor="cadetblue";
        element.style.color="white";
    }
    let handleSignin = async () => {



        let result = await fetch('http://localhost:5000/login/Employ', {
            method: 'post',
            body: JSON.stringify(arr),
            headers: {
                'Content-type': 'application/json'
            }
        })

        result = await result.json();
        console.log(result)
        if (result.result === 'NoUser') {

            alert("Enter Valid Detail")

        }
        else {
            
            navigate('/home')
            sessionStorage.setItem('users', JSON.stringify(result.data));
            window.location.reload();

        }
    }
    let navigateTo=()=>{
        navigate('/signup')
    }
    return (
        <div className="signUp">



            <h1 >SignIn</h1><br />
            <Link className="EsignupLink" to='/employsignin' id="employsignupLink"><h1>Employe</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="signupLink" to='/companysignin'onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)} id="companySignupLink"><h1>Company</h1></Link><br /><br />
           
            <label >Enter Email </label><br />
            <input type='text' placeholder='Enter Registered Email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' />
            <label >Password</label><br />
            <input type='text' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' /><br />
            <button onClick={handleSignin} className='inputBox' type="button"> SignIn</button>
            <button  onClick={navigateTo} className='inputBox' type="button">SignUp</button>

        </div>
    )
}
export default Esignin;