import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom';


export default function Header() {

  const history=useHistory();
    const logout = () =>
    {
     localStorage.clear();
     history.push('login')
    }
 
    return (
        <div className='container-fluid px-0'>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-4 mt-xl-4 ">
      <li className="nav-item">

 <li className="nav-item " >
     
        <a className='nav-link ' href="/">
          <img src='https://www.iqair.com/assets/logos/ic-logo-iq-air-blue.svg'/>
          </a>       
        </li>     
     </li >
        <li className="nav-item text-light">
        <a className='nav-link text-light'  href="/">Home</a>       
        </li>
        <li className="nav-item">
        <a className='nav-link text-light' href="/register">Registration</a>
              
        </li>
        <li className="nav-item">
        <a className='nav-link text-light' href="/login">Login</a>     
        </li>
        <li className="nav-item">
        <a className='nav-link text-light' href="/dashboard">Dashboard</a>
        </li>
        <a className='nav-link text-light' href="/">Home</a>
         </ul>
      
    <ul className="navbar-nav ml-auto mb-2 mb-lg-4 mt-xl-4">
      <li>Welcome {localStorage.getItem("isAuthenticated")==="true"? localStorage.getItem("username"): ""}</li>
      <li><button  onClick={logout}> {localStorage.getItem("isAuthenticated")==="true"? "Sign out":""} </button></li>
    </ul>
    
  
    </div>
    </div>

</nav>
        </div>
    )
}