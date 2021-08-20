import React,{useState, useEffect} from 'react';
import './Header.css';
import {Link, useHistory} from 'react-router-dom';


export default function Header() {

  const[isuser, setUser]= useState(false);
  const myHistory=useHistory();
  const logout = () =>
    {
     sessionStorage.clear();
     myHistory.push('/');
    }

    const gotoDashboard = () =>{
      if(isuser === "true"){
        console.log(isuser === "true");
        console.log("Redirect to dashboard page");
        myHistory.push("/dashboard");
      }
      else{
        myHistory.push("/");
      }
    }

    useEffect(()=>{
      setUser(sessionStorage.getItem("isAuthenticated"));
      console.log("isuser :",isuser);
    },[isuser]);
 
    return (
        <div className='container-fluid px-0'>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-4 mt-xl-4 ">
        <li className="nav-item " >
          <a className='nav-link ' href="/">
            <img src='https://www.iqair.com/assets/logos/ic-logo-iq-air-blue.svg'/>
          </a>       
        </li>     
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
          {isuser === "true" ? <a className='nav-link text-light' href="/dashboard">Dashboard</a> :<a className='nav-link text-light' href="/">Dashboard</a> }
        </li>

        
        <li className="nav-item">
          {isuser ==="true" ? <a className='nav-link text-light favNav' href="/favouriteCity">Favourite</a>:<a className='nav-link text-light' href="/">Favourite</a>}
        </li>
      </ul>
      
    <ul className="navbar-nav ml-auto mb-2 mb-lg-4 mt-xl-4">
      <li>{sessionStorage.getItem("isAuthenticated")==="true"?"Welcome "+ sessionStorage.getItem("username"): ""}</li>
      <li>{sessionStorage.getItem("isAuthenticated")==="true"? <input type="button" onClick = {logout} name="btn" value="Logout" className="btn btn-outline-danger float-center logout_btn"/>:""} </li>
    </ul>
    
  
    </div>
    </div>

</nav>
        </div>
    )
}