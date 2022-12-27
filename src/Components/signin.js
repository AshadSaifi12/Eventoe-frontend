import React from "react";
import '../App.css';
import { Link} from "react-router-dom";
function signin(){
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
    return(
        <div className='signUp'>
            <h1 >SignIn</h1><br/>
            <Link className="signupLink" to='/employsignin' onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)}  id="employsignupLink"><h1>Employe</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="signupLink" to='/companysignin' onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)} id="companySignupLink"><h1>Company</h1></Link>
         <h1>Kindly Choose One</h1>       
        </div>
        
    )
}

export default signin;
