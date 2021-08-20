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
        <div className = "countryCard">
            <h2 style ={{textAlign : "center"}}>{props.countryname}</h2>
            <button onClick = {()=> goToStateCard(props.countryname)} className = "btn btn-primary statebutton" style={{marginLeft:"50px"}}>View State</button>
        </div>
    )
}
