import React from "react";
import { Link , useNavigate} from "react-router-dom";
import '../App.css';
import Nav2 from "./nav2";


const Nav = () => {
    const auth =sessionStorage.getItem('users')
    let handleMouse=(id)=>{
        const element=document.getElementById(id);
        
        element.style.color="cadetblue";
    }
    let handleDown=(id)=>{
        const element=document.getElementById(id);
        
        element.style.color="white";
    }
    const navigate=useNavigate();
   
    const logout=()=>{
        sessionStorage.clear();
        
        navigate('/')
        window.location.reload();   
    }
    if(auth){
     return (
        <div className='nav-ul'>
            <ul>
                
                <Link className="item" to='/home'
                 onMouseLeave={(e)=>handleDown(e.target.id)}
                  onMouseEnter={(e)=>handleMouse(e.target.id)} id="home-li">Home
                  </Link><br/>
                <Link className="item" to='/profile'  onMouseLeave={(e)=>handleDown(e.target.id)}
                  onMouseEnter={(e)=>handleMouse(e.target.id)}id="profile">Profile</Link>
                <Link className="item" to='/about' onMouseLeave={(e)=>handleDown(e.target.id)}
                  onMouseEnter={(e)=>handleMouse(e.target.id)} id="about">About us</Link>
                <Link className="item" to='/work' onMouseLeave={(e)=>handleDown(e.target.id)}
                  onMouseEnter={(e)=>handleMouse(e.target.id)} id="work">work</Link>
                  
                <Link className="item" onClick={logout}onMouseLeave={(e)=>handleDown(e.target.id)}
                  onMouseEnter={(e)=>handleMouse(e.target.id)} to='/' id="logout">LogOut</Link>
            </ul>
        </div>
    )
     }
     else{
        return(<Nav2 />)
     }
}


export default Nav ;
