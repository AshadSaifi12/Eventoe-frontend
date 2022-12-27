import React ,{useState}from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../App.css';
const CompanySignup =()=>{
        const [companyName, setCompanyName] = useState("");
        const [cinNo, setCinNumber] = useState("");
        const [OwnerName, setName] = useState("");
        const [email, setEmail] = useState("");
        const [url, setUrl] = useState("");
        const [password, setPassword] = useState("");
        const [contactNumber, setnumber] = useState();
        const [companyType, setType] = useState("wedding");
        const [address, setAddress] = useState("");
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
        let collectData = async() => {
            console.warn()
            const arr={companyName,OwnerName,cinNo, email,url, password,contactNumber,address,companyType}
        let result = await fetch('http://localhost:5000/company', {
                    method: 'post',
                    body: JSON.stringify(arr),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                
                result=await result.json();
                console.log(result.name)
                if(result.result1==='UserValid'){
                    sessionStorage.setItem('users',JSON.stringify(result.result));
                    navigate('/home')
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
        <div className="CsignUp">
           <h1 >SignUp</h1><br/>
            <Link className="signupLink" to='/EmploySignup'  onMouseLeave={(e)=>handleDown(e.target.id)} onMouseEnter={(e)=>handleMouse(e.target.id)} id="employsignupLink"><h1>Employe</h1></Link>
            <h1 className="signupLink" id='or'>or</h1>
            <Link className="CsignupLink" to='/CompanySignup' id="companySignupLink"><h1>Company</h1></Link><br/><br/>
            <label >Enter CIN no. of Company</label><br />
            <input type='number' placeholder='CIN no.' value={cinNo} onChange={(e) => setCinNumber(e.target.value)} className='inputBox' />
            <br/><br></br>
            <label >Name of the Company</label><br />
            <input type='text' placeholder='Enter Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} className='inputBox' />
            <label >Official Url</label><br />
            <input type='text' placeholder='URL' value={url} onChange={(e) => setUrl(e.target.value)} className='inputBox' />
            <label >Name of owner</label><br />
            <input type='text' placeholder='Enter owner Name' value={OwnerName} onChange={(e) => setName(e.target.value)} className='inputBox' />
            <label >Email</label><br />
            <input type='text' placeholder='Enter Company Email' value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' />
            <label >Contact no./telephone no.</label><br />
            <input type='number' placeholder='Contact Number' value={contactNumber} onChange={(e) => setnumber(e.target.value)} className='inputBox' />
            <br/><br/>
            <label >Address of Resgistered Office</label><br />
            <input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} className='inputBox' />
            <br/><br/>
            <label >Type of Event Company:</label><br/>
            <select value={companyType} onChange={(e) => setType(e.target.value)} id="type of work" name="work">
                <option value="Wedding">Wedding</option>
                <option value="Pool Party">Pool Party</option>
                <option value="Exhibition">Exhibition</option>
                <option value="Function Show">Function Show</option>
                <option value="Road Show">Road Show</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Concert">Concert</option>
                <option value="Brand Activition">Brand Activition</option>
                <option value="Sport Events">Sport Events</option>
                <option value="others">Other's</option>
            </select><br/><br/><br/>
            <label >Password</label><br/> 
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' />
                    <button onClick={collectData} className='inputBox' type="button"> SignUp</button>
                    <button  onClick={navigateTo} className='inputBox' type="button">SignIn</button>
                     </div>

    )
}
export default CompanySignup;