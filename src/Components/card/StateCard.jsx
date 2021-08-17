import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

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
        <main class="grid">
            <article >
            
            <div class="text">
            <h3 style={{color:"white", textAlign:"center" }}>{props.statename}</h3>
            <button onClick = {()=>goToCityCard(props.statename,props.countryname)}>View</button>
            </div>
        </article>
    </main>
    )
}
