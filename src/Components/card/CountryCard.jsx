import React, {useState,useEffect} from 'react';

import {Link, useHistory } from 'react-router-dom';
import './CountryCard.css';
export default function CountryCard(props) {
    const[countryname, setCountryname]=useState('');
    let myHistory = useHistory();

    const goToStateCard =(e) =>{
        console.log(e);
        myHistory.push(`/state/${e}`);
    }

    useEffect(()=>{
        setCountryname(props.countryname);
    },[props.countryname]);
    
    return (
        <main class="grid">
            <article >
            
            <div class="text">
            <h3 style={{color:"white", textAlign:"center" }}>{props.countryname}</h3>
            <button onClick = {()=> goToStateCard(props.countryname)}>View</button>
            </div>
        </article>
    </main>
    )
}
