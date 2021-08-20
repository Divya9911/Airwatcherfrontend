import axios from 'axios';
import React, {useState,useEffect} from 'react';
import CityCard from '../card/CityCard';

import { useParams} from 'react-router-dom';
import Header from '../header/Header';

export default function City() {
    let idparam = useParams();
    const[citydata, myCallback] =useState([]);
    

    //start of useEffect
    useEffect(function(){
        axios.get(`http://api.airvisual.com/v2/cities?state=${idparam.statename}&country=${idparam.countryname}&key=f1f59aa4-9df0-47cc-a2b2-717c8e01fc9a`)
        .then((result)=>{
            console.log("Result from City :",result.data.data);
            myCallback(result.data.data);
        }).catch((err) => console.log(err));
    },[]);//End for useEffect

    return (
        <div>
        <Header></Header>
        
        <div>
        <h1 style ={{color:"blue", textAlign:"center", marginTop:"10px"}}>Cities of Country {idparam.countryname } and State {idparam.statename}</h1>
        <div className = "col-md-12">
                {
                    <h1>{citydata.map((c)=>
                        //Sending state names of particular country to StateCard for display
                        
                        <CityCard key = {Math.floor(Math.random()*(999-100+1)+100)} cityid = {Math.floor(Math.random()*(999-100+1)+100)} cityname ={c.city} countryname = {idparam.countryname} statename ={idparam.statename}></CityCard>
                        )}
                    </h1>
                }
            </div>  
    
        </div>
        </div>
    )
}
