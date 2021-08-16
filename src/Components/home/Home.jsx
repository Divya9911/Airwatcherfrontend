import React from 'react'
import iqAir from '../../images/iqAir.svg';
import photo from '../../images/download.jfif';

export default function Home() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6"  style ={{"margin-top":"150px"}}>
                <img src={iqAir}></img>
                <h2>Empowering the world to breath cleaner air</h2>
            </div>
            <div className="col-md-6"  >
                <img src={photo} className="image2" style={{"width":"115%", "height":"140%"}}></img>
            </div>
        </div>

    </div>
    )
}
