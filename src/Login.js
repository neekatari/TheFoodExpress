import React from 'react';
import fire from './config/fire';
import './App.css';
import Signin from './Signin';
import { Link } from  'react-router-dom';

class Login extends React.Component{

    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email,password)
        .then((u) => {
            return(
            <div>
                <h5>login successfully</h5>
            </div>)
        })
        .catch((err) => {
            return(
                <div>
                    <h5>Incorrect username or password.!</h5>
                </div>)
        })
    }

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        fire.auth().createUserWithEmailAndPassword(email,password)
        
        .then((u) => {
            console.log("done");
        })
        .catch((err) => {
            
                console.log("err : " +err.toString() );
        })
    }

    render(){
        return(
            
            <body background="./images/loginb.jpg">
                
                <center>
                <div className="up">
                <div style={{padding: "20px", marginTop: "-50px" }}>
                    <h3>Login Here</h3>
                </div>
                    <div style={{ textAlign:"center" }} className=" col-md-4">
                    
                        <div className="form-group">
                            <input id="email" className="form-control" placeholder="Enter email-id" type="email" />
                        </div>
                        <div classNameName="form-group">
                            <input id="password" className="form-control" placeholder="Enter Password" type="password" />
                        </div>
                    
                        <div style={{margin: "20px"}}>
                            
                            <button className="btn btn-outline" style={{margin: '10px'}} onClick={this.login} ><Link to="/Customer" >Login</Link></button>
                            {/* <button className="btn btn-outline" style={{margin: '10px'}} onClick={this.signUp} >Sign Up</button> */}
                            <button className="btn btn-outline" style={{margin: '10px'}} onClick={this.signUp} ><Link to="/Signin" style={{color: 'white'}} >SignUp</Link></button>
                        </div>
                        </div> 
                    </div>
                    </center>
                
            </body>
            
            

        )
    }
}

export default Login;