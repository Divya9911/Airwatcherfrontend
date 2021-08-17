import axios from 'axios';
import React from 'react';
import {Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'

export default function Login() {
    let myHistory = useHistory();
    const[emailid, setEmailid] = useState('');
    const[password,setPassword] = useState('');
    const[username,setUsername] = useState('');

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
            localStorage.setItem('username',username);
            //console.log("Token : ",res.data.token);
            myHistory.push('/dashboard');
        })
        .catch(err => console.log(err))
    }
    return (
        <body style ={{marginTop :"-50px"}}>
        <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
            <span className="logo_title mt-5"> Login Dashboard </span>
        </div>
        <div className="card-body">
            <form onSubmit={(e) => loginUser(e)}>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="username" id ="username" className="form-control" placeholder="Username"
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }} required/>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="text" name="emailid" id ="emailid" className="form-control" placeholder="Email id"
                    onChange={(event) => {
                        setEmailid(event.target.value);
                    }} required/>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-center login_btn"/>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
    )
}
