import {React,useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    let myHistory = useHistory();
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname] = useState('');
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
            myHistory.push('/login');
        }).catch(err =>{ 
            console.log(err);
            alert(err);
        });
            
        }
        else{
            alert("password mismatch");
        }
    }


    return (
        <div className ="container">
            <div className="row centered-form">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                    <div className="panel panel-default">
        		        <div className="panel-heading">
                            <h3 className="panel-title">Please sign up for IQAir <small>It's free!</small></h3>
                        </div>
                        <div className="panel-body">
                            <form role="form" onSubmit={(e) => signUp(e)} >
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="firstname" className="form-control input-sm" placeholder="First Name"
                                            onChange = {(event) =>{setFirstname(event.target.value)}} required></input>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="text" id="lastname" className="form-control input-sm" placeholder="Last Name"
                                        onChange = {(event) =>{setLastname(event.target.value)}} required></input>
			    					</div>
			    				</div>
                                <div className="form-group">
			    				    <input type="email"  id="emailid" className="form-control input-sm" placeholder="Email Address"
                                    onChange = {(event) =>{setEmailid(event.target.value)}} required></input>
			    			    </div>
                                <div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" id="password" className="form-control input-sm" placeholder="Password"
                                        onChange = {(event) =>{setPassword(event.target.value)}} required></input>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
                                    <input type="text" id="confirmpassword" className="form-control input-sm" placeholder="Confirm Password"
                                    onChange = {(event) =>{setConfirmPassword(event.target.value)}} required></input>
			    					</div>
			    				</div>
			    			</div>
                            </div>
                            <input type="submit" value="Register" className="btn btn-info btn-block"></input>
                                     
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
