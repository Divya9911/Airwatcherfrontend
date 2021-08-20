import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../header/Header';

export default function Home() {

    let myHistory = useHistory();
    
    return (
        <body>
        <Header></Header>
        <div className="container-fluid px-0" >
            <div className='row' >
                <div className="card text-white" >
                    <img className="card-img img-fluid" style ={{border:"none"}} 
                     src="https://www.iqair.com/assets/img/enterprise/air-api/earth.webp"  alt="Card image"/>
                    <div className="card-img-overlay" style={{marginLeft:'3%',marginTop:'8%', border:"none"}}>
                        <h5 className="card-title">Air Quality :)</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        <button className ="btn btn-primary" onClick ={() => {myHistory.push("/login")}}>Get Started</button>
                    </div>
                </div>
                
            </div>
        </div>
        </body>
    )
}
