import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import CityCard from '../card/CityCard';


export default function City(props) {
    // To get the parameters from url
    let idparam = useParams();
    const[citydata, myCallback]=useState('');

     //start of useEffect
     useEffect(function(){
        axios.get(`http://api.airvisual.com/v2/cities?state=${idparam.statename}&country=${idparam.countryname}&key=f1f59aa4-9df0-47cc-a2b2-717c8e01fc9a`)
        .then((result)=>{
            console.log("City Api result : ", result.data.data);
            myCallback(result.data.data);
        }).catch((err) => console.log(err));
    },[]);//End for useEffect

    return (
        <div className ="container">
        <h1>Cities of Country {idparam.countryname } and State {idparam.statename}</h1>    
        
        <div className = "col-md-12">
                    {
                        <h1>{citydata.map((c)=>
                            //Sending state names of particular country to StateCard for display
                            <CityCard key = {c.city} cityname ={c.city} ></CityCard>
                            )}
                        </h1>
                    }
                </div>  
        
    </div>
        
        
        
    )
}
