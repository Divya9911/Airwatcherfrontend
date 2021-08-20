import React from 'react';
import { useHistory } from 'react-router-dom';
import './FavouriteCard.css';
import axios from 'axios';

export default function FavouriteCard(props) {

    let myHistory = useHistory();
    console.log("Cityname is :",props.cityname);

    const goToCityDetails = (cityname,state,country)=>{
        // console.log("State is : ",state);
        // console.log("Country is :", country);
        
        console.log("City is :",cityname);
        console.log("State is :",state);
        console.log("Country is :",country);
        myHistory.push(`/citydetails/${cityname}/${state}/${country}`);
    }

    const deleteCity =(cityname)=>{
        // axios.delete(`http://localhost:9090/api/v1/deleteCity/${localStorage.getItem('emailid')}/${cityname}`,
        // {headers:{
        //     'Content-Type': 'application/json',
        //     'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
        // }}).then(
        //     (result)=>{
        //         console.log(result);
        //         myHistory.push("/favouriteCity");
                
        //     }
        //     ).catch((err)=>{console.log(err);})
        props.delCityEvent(cityname);
        }

    return (
        <div className = "favouriteCard">
            <h2 style ={{textAlign : "center"}}>{props.cityname}</h2>
            <button onClick = {()=> goToCityDetails(props.cityname, props.state, props.country)} 
            class="btn btn-primary showdata"  style={{marginLeft:"50px"}}>View Data</button>
            <button onClick = {()=> deleteCity(props.cityname)} 
            class="btn btn-primary" style={{marginLeft:"50px"}}>Delete City</button>
        </div> 
    )
}
