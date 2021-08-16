import axios from 'axios';
import React from 'react';
import {Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    let myHistory = useHistory();
    const[emailid, setEmailid] = useState('');
    const[password,setPassword] = useState('');

    const loginUser = (e) =>
    {
        e.preventDefault();
        console.log(emailid);
        console.log(password);
        axios.post('http://localhost:9092/auth/user/login',
        {emailid,password},{
            headers:{
                'Content-Type': 'application/json'
        }
        }).then((res)=>{
            console.log(res);
            localStorage.setItem('myToken',res.data.token);
            localStorage.setItem('isAuthenticated',"true");
            localStorage.setItem('emailid',emailid);
            //console.log("Token : ",res.data.token);
            myHistory.push('/dashboard');
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={(e) => loginUser(e)}>
                <div className="mb-3">
                    <label htmlFor="emailid" className="form-label">Email id</label>
                    <input type="text" className="form-control" id="emailid" onChange={(event) => {
                        setEmailid(event.target.value);
                    }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/register"><button type="button" className="btn btn-primary ml-5">Register</button></Link>          </form>
        </div>
    )
}
