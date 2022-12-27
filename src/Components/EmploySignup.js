import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../App.css';


const EmploySignup  = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [workStatus, setStatus] = useState("fresher");
    const [noOfYears, setYear] = useState(0);
    const [contactNumber, setnumber] = useState();
    const [workType, setType] = useState("");
    const navigate=useNavigate();
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

    let    collectData = async () => {
                const arr={name, email,contactNumber,workType,workStatus,noOfYears,password}
        

                let result = await fetch('http://localhost:5000/register', {
                    method: 'post',
                    body: JSON.stringify(arr),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                
                result=await result.json();
                if(result.result1==='UserValid'){
                    navigate('/home')
                    sessionStorage.setItem('users',JSON.stringify(result.result));
                   window.location.reload();
                   
                
                }
                else{
                    alert("User allready Exist")
                }      
    }
    let navigateTo=()=>{
        navigate('/signin')
    }

    return (

        <div className="signUp">
            

            
            <h1 >SignUp</h1><br />
            <Link className="EsignupLink" to='/EmploySignup' id="employsignupLink"><h1>Employe</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="signupLink" to='/CompanySignup' onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)} id="companySignupLink"><h1>Company</h1></Link><br /><br />
            <label >Name</label><br />
            <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='inputBox' />
            <label >Email</label><br />
            <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' />
            <label >Contact no</label><br />
            <input type='number' placeholder='Contact Number' value={contactNumber} onChange={(e) => setnumber(e.target.value)} className='inputBox' />
            <br />
            <label >Choose a work:</label><br/>
            <select value={workType} onChange={(e) => setType(e.target.value)} id="type of work" name="work">
                <option value="Planner">Planner</option>
                <option value="Caters">Caters</option>
                <option value="Management">Management</option>
                <option value="Decorator">Decorator</option>
                <option value="Photographer">Photographer</option>
                <option value="Event Designer">Event Designer</option>
                <option value="Light Technician">Light Technician</option>
                <option value="Others">Other's</option>
            </select><br /><br />
            <label >Working status</label><br/>
            <select value={workStatus} onChange={(e) => setStatus(e.target.value)} id="type of work" name="work">
                <option value="Fresher">Fresher</option>
                <option value="Working">Working</option>
            </select><br /><br />
            <label >No of years Working</label><br/>
            <select value={noOfYears} onChange={(e) => setYear(e.target.value)} id="type of work" name="work">
                <option value="0">0 Year</option>
                <option value="1">1 years</option>
                <option value="2">2 years</option>
                <option value="3">3 years</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="more than 5">More than 5</option>
            </select><br /><br />
            <label >Password</label><br />
            <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' />
            <button onClick={collectData} className='inputBox' type="button"> SignUp</button>
            <button   onClick={navigateTo} className='inputBox' type="button">SignIn</button>
        </div>
    )
}
export default EmploySignup;