import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

import Footer from './Components/footer';
import EmploySignUp from './Components/EmploySignup';
import CompanySignUp from './Components/CompanySignup';
import Initial from './Components/initial';
import Signin from './Components/signin';
import EmploySignin from './Components/employSignin';
import CompanySignin from './Components/companysignin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import SignUp from './Components/Signup';
import './App.css';
import Nav2 from './Components/nav2';

const auth =sessionStorage.getItem('users');
    
console.log(auth);
const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <BrowserRouter>
          <Nav2/>
      <Routes>
        <Route path="/home" element={<h1>Home Link Working</h1>} />
        <Route path="/profile" element={<h1>Profile Link is Working</h1>} />
        <Route path="/about" element={ <h1>About Link Working</h1>} />
        <Route path="/work" element={<h1>Work Link Working</h1>} />
        <Route path="/logout" element={ <h1>Logout Link Working </h1>} />
  
  
        <Route path="/signup" element={
          <SignUp/>
        } />
        <Route path="/employSignup" element={
          <EmploySignUp/>
        } />
        <Route path="/companySignup" element={
          <CompanySignUp/>
          
        } />
        <Route path="/employSignin" element={
          <EmploySignin/>
        } />
        <Route path="/companySignin" element={
          <CompanySignin/>
          
        } />
        
        <Route path="/" element={
          <Initial/>
        } />
        <Route path="/signin" element={
          <Signin/>
        } />
      </Routes>
      <br />
      </BrowserRouter>
      <Footer/>
     
    </React.StrictMode>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
