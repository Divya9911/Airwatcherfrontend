import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './CityCard.css';

export default function CityCard(props) {
    const[city, setCityname] =useState('');
    console.log(props.cityname);
    console.log("key : ", props.cityid);
    let myHistory = useHistory();

     
    const goToCityDetails = (cityname,state,country)=>{
        // console.log("State is : ",state);
        // console.log("Country is :", country);
        
        console.log("City is :",cityname);
        myHistory.push(`/citydetails/${cityname}/${state}/${country}`);
    }

    const saveToWatchList = (cityid,cityname,state,country) =>{
        
        // console.log("State under saveToWatchList : ",state);
        // console.log("Country under saveToWatchList :", country);
        // console.log("City is under saveToWatchList:",cityname);
        // console.log("Bearer" +localStorage.getItem("mytoken"));
        axios.post(`http://localhost:9090/api/v1/addCity/${sessionStorage.getItem('emailid')}`,
        {cityid,cityname,state,country},{
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
            }
        }).then((res)=>{
            console.log(console.log("response for favourite from city card :" ,res));
            console.log("response for favourite from city card :" ,res.data);
            if(res.data == true){
                alert("City added to favourites");
            }
            else{
                alert("City already exist");
            }

            }
        )
        .catch(err => {
            console.log("error for favourite from city card :",err.response.data);
            alert(err.response.data);
        })
        }
    
    useEffect(()=>{
        setCityname(props.cityname);
    },[props.cityname]);

    return (
        <div className = "cityCard">
            <h2 style ={{textAlign : "center"}}>{props.cityname}</h2>
            <button onClick = {()=> goToCityDetails(props.cityname, props.statename, props.countryname)} 
            class="btn btn-primary"  style={{marginLeft:"50px"}}>View Details</button>
            <button onClick = {()=> saveToWatchList(props.cityid,props.cityname, props.statename, props.countryname)} 
            class="btn btn-primary"  style={{marginLeft:"35px"}}>Add to Favourite</button>
        </div>
    )
}
