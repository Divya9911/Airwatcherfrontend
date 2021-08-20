import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Header from '../header/Header';
import './CityDetails.css';
export default function CityDetails(props) {
    let idparam = useParams();
    const[detailedCityData, myCallback] =useState([]);
    const[pollutiondata, pollutionCallback] = useState([]);    
    const weathericon = () => {switch(detailedCityData.ic){
        case "01d" : return <img src = "https://www.airvisual.com/images/01d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "01n" : return <img src = "https://www.airvisual.com/images/01n.png" style = {{height:"50px", width:"50px"}}></img>;
        case "02d" : return <img src = "https://www.airvisual.com/images/02d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "02n" : return <img src = "https://www.airvisual.com/images/02n.png" style = {{height:"50px", width:"50px"}}></img>;
        case "03d" : return <img src = "https://www.airvisual.com/images/03d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "04d" : return <img src = "https://www.airvisual.com/images/04d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "09d" : return <img src = "https://www.airvisual.com/images/09d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "10d" : return <img src = "https://www.airvisual.com/images/10d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "10n" : return <img src = "https://www.airvisual.com/images/10n.png" style = {{height:"50px", width:"50px"}}></img>;
        case "11d" : return <img src = "https://www.airvisual.com/images/11d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "13d" : return <img src = "https://www.airvisual.com/images/13d.png" style = {{height:"50px", width:"50px"}}></img>;
        case "50d" : return <img src = "https://www.airvisual.com/images/50d.png" style = {{height:"50px", width:"50px"}}></img>;
        default : return <img src = "" style = {{height:"50px", width:"50px"}}></img>;
    }}

    const weathericondetail = () => {switch(detailedCityData.ic){
        case "01d" : return <h4>Clear Sky (Day)</h4>
        case "01n" : return <h4>Clear Sky (Night)</h4>
        case "02d" : return <h4>Few Clouds (Day)</h4>
        case "02n" : return <h4>Few Clouds (Night)</h4>
        case "03d" : return <h4>Scattered Clouds</h4>
        case "04d" : return <h4>Broken clouds</h4>
        case "09d" : return <h4>Shower rain </h4>
        case "10d" : return <h4>Rain (Day time)</h4>
        case "11d" : return <h4>Thunderstorm</h4>
        case "13d" : return <h4>Snow</h4>
        case "50d" : return <h4>Mist</h4>
        default : return <h4>No info available</h4>;
    }}

   console.log() 
    //start of useEffect
    useEffect(function(){
        axios.get(`http://api.airvisual.com/v2/city?city=${idparam.cityname}&state=${idparam.statename}&country=${idparam.countryname   }&key=f1f59aa4-9df0-47cc-a2b2-717c8e01fc9a`).then
        ((result)=>{
            console.log(result.data.data.current.pollution);
            myCallback(result.data.data.current.weather);
            pollutionCallback(result.data.data.current.pollution);
        }).catch((err) => console.log(err));
    },[]);//End for useEffect


    return (
        <div className = "containerFluid">
        <Header></Header>
        <div className ="container">
            <h2 className="heading"> Weather information {weathericon()} </h2>
            <table className = "table table-bordered padded">
                <thead className ="theadDark">
                <tr>
                <th scope ="row">Temparature in Celcius</th>
                <td>{detailedCityData.tp}</td>
            </tr>
            <tr>
                <th scope ="row">Atmospheric Pressure in hPa</th>
                <td>{detailedCityData.pr}</td>
            </tr>
            <tr>
                <th scope ="row">Humidity %</th>
                <td>{detailedCityData.hu}</td>
            </tr>
            <tr>
                <th scope ="row">Wind direction(angle of 360*)</th>
                <td>{detailedCityData.wd}</td>
            </tr>
            <tr>
                <th scope ="row">Wind speed(m/s)</th>
                <td>{detailedCityData.ws}</td>
            </tr>
            <tr>
                <th scope ="row">Status</th>
                <td style ={{text : "white"}} > {weathericondetail()}</td>
            </tr>

                </thead>
            </table>

            <h2 className="heading"> Pollution Information {weathericon()} </h2>
            <table className = "table table-bordered padded">
                <thead className ="theadDark">
                <tr>
                <th scope ="row">AQI value based on US EPA standard</th>
                <td>{pollutiondata.aqius}</td>
            </tr>
            <tr>
                <th scope ="row">Timestamp</th>
                <td>{pollutiondata.ts}</td>
            </tr>
            <tr>
                <th scope ="row">Main Pollutant for US AQI</th>
                <td>{pollutiondata.mainus}</td>
            </tr>
            <tr>
                <th scope ="row">Main Pollutant for Chinese AQI</th>
                <td>{pollutiondata.maincn}</td>
            </tr>
            <tr>
                <th scope ="row">AQI value based on China MEP standard</th>
                <td>{pollutiondata.aqicn}</td>
            </tr>
            <tr>
                <th scope ="row">Status</th>
                <td style ={{text : "white"}} > {weathericondetail()}</td>
            </tr>

                </thead>
            </table>

        </div>
        </div>
    )
}
