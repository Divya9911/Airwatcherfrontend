import axios from 'axios';
import React, {useState,useEffect} from 'react';
import StateCard from '../card/StateCard';

import { useParams} from 'react-router-dom';

export default function States() {
    let idparam = useParams();
    console.log("Country is : ",idparam.countryname);

    const[statedata, myCallback] =useState([]);
    
    //start of useEffect
    useEffect(function(){
        axios.get(`https://api.airvisual.com/v2/states?country=${idparam.countryname}&key=f1f59aa4-9df0-47cc-a2b2-717c8e01fc9a`)
        .then((result)=>{
            console.log(result);
            myCallback(result.data.data);
        }).catch((err) => console.log(err));
    },[]);//End for useEffect


    return (
        <div>
            <h1 style ={{color:"blue", textAlign:"center", marginTop:"10px"}}>States of country {idparam.countryname}</h1>
            <div className = "col-md-12">
                    {
                        <h1>{statedata.map((s)=>
                            //Sending state names of particular country to StateCard for display
                            <StateCard key = {s.state} statename ={s.state} countryname = {idparam.countryname}></StateCard>
                            )}
                        </h1>
                    }
                </div>  
        </div>
    )
}
