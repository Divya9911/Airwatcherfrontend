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
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-4 mt-xl-4">
        <li className="nav-item">
     
        <a className='nav-link' href="/">Home</a>       
        </li>
        <li className="nav-item">
        <a className='nav-link' href="/register">Registration</a>
              
        </li>
        <li className="nav-item">
        <a className='nav-link' href="/login">Login</a>     
        </li>
        <li className="nav-item">
        <a className='nav-link' href="/dashboard">Dashboard</a>
        </li>
        <a className='nav-link' href="/">Home</a>
         </ul>
      
    <ul className="navbar-nav ml-auto mb-2 mb-lg-4 mt-xl-4">
  <li>Welcome {localStorage.getItem("isAuthenticated")==="true"? localStorage.getItem("emailid"): ""}</li>
<li ><button  onClick={logout}> {localStorage.getItem("isAuthenticated")==="true"? "Sign out":""} </button></li>
 
</ul>
    
  
    </div>
    </div>

</nav>
        </div>
    )
}
