import axios from 'axios';
import React, {useState,useEffect} from 'react';
import CountryCard from '../card/CountryCard';
import Header from '../header/Header';


export default function Dashboard() {

    const[countrydata, myCallback] =useState([]);

  
    
    //start of useEffect
    useEffect(function(){
        axios.get('https://api.airvisual.com/v2/countries?key=f1f59aa4-9df0-47cc-a2b2-717c8e01fc9a').then
        ((result)=>{
            console.log(result.data.data);
            myCallback(result.data.data);
        }).catch((err) => console.log(err));
    },[]);//End for useEffect

    return (
           <div className ="containerFluid">  
                <Header></Header>   
            <div className ="container">
                <div className="row">
                    <h1 style={{"textAlign":"center","color":"red",marginTop:"20px"}}>Gloabal Air pollution coverage</h1>
                    <p style={{"textAlign":"center","display":"block","font-size": "16px",
                    "line-height": "1.63","color":"white",
                    }}>Access the largest network of air quality monitors globally, to ensure
                    your international audience has the most accurate air quality coverage 
                                                available.</p>
                    <h2 style={{"textAlign":"center","color":"blue"}}>Countries</h2>                                             

                </div>
                <div className = "row">
                    <div className = "col-md-12">
                        {
                            <h1>{countrydata.map((c)=>
                                <CountryCard key = {c.country} countryname ={c.country}></CountryCard>
                                )
                            }</h1>
                        }
                    </div>      
                </div>
                        
            </div>
            </div>              
    )
}
