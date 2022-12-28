import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../App.css';


const Csignin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cinNo,setCinNumber]=useState()
    const navigate = useNavigate();
    const arr = { cinNo, email, password }
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
    console.log(arr);

    let handleSignin = async () => {



        let result = await fetch('http://localhost:5000/login/Company', {
            method: 'post',
            body: JSON.stringify(arr),
            headers: {
                'Content-type': 'application/json'
            }
        })

        result = await result.json();
        if (result.result === 'NoCompany') {

           alert("Enter Valid Detail")

        }
        else {
            console.log(result.data);
            navigate('/home')
             sessionStorage.setItem('users', JSON.stringify(result.data));
           window.location.reload();

        }
    }
    let navigateTo=()=>{
        navigate('/signup')
    }
    return (
        <div className="CsignUp">



            <h1 >SignIn</h1><br />
            <Link className="signupLink" to='/employsignin' onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)} id="employsignupLink"><h1>Employe</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="CsignupLink" to='/companysignin' id="companySignupLink"><h1>Company</h1></Link><br /><br />
            <label >Enter CIN no. of Company</label><br />
            <input type='number' placeholder='CIN no.' value={cinNo} onChange={(e) => setCinNumber(e.target.value)} className='inputBox' />
            <br/><br></br>
            <label >Email</label><br />
            <input type='email' placeholder='Enter Official Email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' />
            <label >Password</label><br />
            <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' /><br />
            <button onClick={handleSignin} className='inputBox' type="button"> SignIn</button>
            <button  onClick={navigateTo} className='inputBox' type="button">SignUp</button>

        </div>
    )
}
export default Csignin;