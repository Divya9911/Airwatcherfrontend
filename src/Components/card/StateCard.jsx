import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './StateCard.css';

export default function StateCard(props) {
    const[statename, setStatename] =useState('');
    console.log(props.statename);
    let myHistory = useHistory();

    const goToCityCard = (state,country)=>{
        console.log("State is : ",state);
        console.log("Country is :", country);
        myHistory.push(`/city/${country}/${state}`);
    }
    
    useEffect(()=>{
        setStatename(props.statename);
    },[props.statename]);


    return (
        <div className = "stateCard">
            <h2 style ={{textAlign : "center"}}>{props.statename}</h2>
            <button onClick = {()=>goToCityCard(props.statename,props.countryname)}
            class="btn btn-primary" style={{marginLeft:"50px"}}>View City</button>
        </div>
    )
}
