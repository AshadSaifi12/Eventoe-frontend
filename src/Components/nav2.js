import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Nav from "./nav";

const Nav2 = () => {
    const auth =sessionStorage.getItem('users')
    
    let handleMouse=(id)=>{
        const element=document.getElementById(id);
        
        element.style.color="cadetblue";
    }
    let handleDown=(id)=>{
        const element=document.getElementById(id);
        
        element.style.color="white";
    }
   
    return (
        <div className='nav-ul1'>
            <ul>
                <div className="logo">{ auth ? <Link  to='/home'><img  src="./eventoe-logo.png" alt='logo'></img></Link>:<Link  to='/'><img  src="./eventoe-logo.png" alt='logo'></img></Link>}</div>  
                
                { auth ? <Nav />:
                <Link className="item" onMouseLeave={(e)=>handleDown(e.target.id)}
                onMouseEnter={(e)=>handleMouse(e.target.id)} id='signupsymbol' to='/'>SignUp/SignIn</Link>}
            </ul>
        </div>
    )
}


export default Nav2;