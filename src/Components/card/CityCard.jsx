import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default function CityCard(props) {
    const[cityname, setCityname] =useState('');
    console.log(props.cityname);
    let myHistory = useHistory();

    const goToCityDetails = (city)=>{
        // console.log("State is : ",state);
        // console.log("Country is :", country);
        console.log("City is :",)
        myHistory.push(`/citydetails/${city}`);
    }
    
    useEffect(()=>{
        setCityname(props.cityname);
    },[props.cityname]);

    return (
        <div>
            <div class="card" style={{"width": "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">City</h5>
                <p class="card-text">{props.cityname}</p>
                <button onClick = {()=> goToCityDetails(props.cityname)} class="btn btn-primary">View</button>
            </div>
        </div>
        </div>
        
        )
}
