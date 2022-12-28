import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
function initial(){
    
    return(
        <div className='signUp'>
            <h1 >Welcome to Eventoe!!!</h1>
            <div className="initial-link">
            <Link className="signupLink" to='/signin'  id="employsignupLink"><h1>SignIn</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="signupLink"   to='/signup' id="companySignupLink"><h1>SignUp</h1></Link>
            </div>
         <h1>Kindly Choose One</h1>       
        </div>
        
    )
}

export default initial;