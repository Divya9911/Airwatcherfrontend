import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import FavouriteCard from '../card/FavouriteCard';
import Header from '../header/Header';

export default function Favourite() {
    const[favouriteCity,setFavouriteCity] = useState([]);
    let idparam = useParams();
    let cityname = idparam.cityname;
    let myHistory = useHistory();
    useEffect(function(){
        axios.get(`http://localhost:9090/api/v1/city/${sessionStorage.getItem('emailid')}`,
        {headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
        }}).then(
            (result)=>{
                console.log(result.data);
                setFavouriteCity(result.data);
            }
        ).catch((err)=>{console.log(err);})
    },[]);

    const delCity =(cityname) =>{
        console.log("inside parent with cityname : " , cityname);
        axios.delete(`http://localhost:9090/api/v1/deleteCity/${localStorage.getItem('emailid')}/${cityname}`,
        {headers:{
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
        }}).then(
            (result)=>{
                console.log(result);
                axios.get(`http://localhost:9090/api/v1/city/${localStorage.getItem('emailid')}`,
                {headers:{
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
                }}).then(
                    (result)=>{
                        console.log(result.data);
                        setFavouriteCity(result.data);
                    }
                ).catch((err)=>{console.log(err);})
            
            }
            ).catch((err)=>{console.log(err);})
    }

    return (
        <div>
        <Header></Header>
        <div>
        <h1 style ={{color:"blue", textAlign:"center", marginTop:"10px"}}>Watched Cities</h1>
            <div className = "col-md-12">
            {
                <h1>{favouriteCity.map((f)=>
                    //Sending state names of particular country to StateCard for display
                    
                    <FavouriteCard key = {f.cityid} cityname ={f.cityname} state= {f.state} 
                    country ={f.country} delCityEvent={delCity}></FavouriteCard>
                    )}
                </h1>
            }            
            </div>  
    
        </div>
        </div>
    )

    }