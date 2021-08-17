import {React,useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    let myHistory = useHistory();
    const[username,setUsername]=useState('');
    
    const[emailid,setEmailid] = useState('');
    const[password,setPassword]= useState('');
    const[confirmpassword, setConfirmPassword] = useState('');

    const signUp = (e) =>{
        e.preventDefault();
        if(password == confirmpassword){
            // console.log(password);
            // console.log(confirmpassword);
            // console.log(password == confirmpassword)
            axios.post('http://localhost:9092/auth/user/adduser',
            {emailid,password},{
            headers:{
                'Content-Type': 'application/json'
        }
        }).then((res)=>{
            console.log("Response for error : ", res);
            myHistory.push('/login');
        }).catch(err =>{ 
            console.log(err.response.data);
            //alert(err);
        });
            
        }
        else{
            alert("password mismatch");
        }
    }


    return (
        <body style ={{marginTop :"-100px"}}>
        <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
            <span className="logo_title mt-5"> Registration Form </span>
        </div>
        <div className="card-body">
            <form onSubmit={(e) => signUp(e)} >
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                <input type="text" name="username" id ="username" className="form-control" placeholder="Username"
                onChange = {(event) =>{setUsername(event.target.value)}} required/>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="text" name="email" id ="emailid" className="form-control" placeholder="Email id"
                    onChange = {(event) =>{setEmailid(event.target.value)}} required/>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" 
                    onChange = {(event) =>{setPassword(event.target.value)}} required/>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="confirmpassword" id="confirmpassword" className="form-control" placeholder="Confirm Password" 
                    onChange = {(event) =>{setConfirmPassword(event.target.value)}} required/>
                </div>
                <div className="form-group">
                    <input type="submit" name="btn" value="Register" className="btn btn-outline-danger float-center login_btn"/>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
    )
}
