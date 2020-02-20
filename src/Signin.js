import React, { Component } from 'react';
import fire from 'firebase';
import './css/style.css';
import { Link } from  'react-router-dom';
import  { Redirect } from 'react-router-dom'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Signin extends Component {
    state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        fire.auth.GoogleAuthProvider.PROVIDER_ID,
        fire.auth.FacebookAuthProvider.PROVIDER_ID,
        fire.auth.TwitterAuthProvider.PROVIDER_ID,
        
        fire.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      fire.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    render() {
      return (
        <div className="up" >
          {this.state.isSignedIn ? (
            
            <Redirect to='/Customer'  />
            
          ) : (
            <StyledFirebaseAuth 
              uiConfig={this.uiConfig}
              firebaseAuth={fire.auth()}
            />
          )}
        </div>
      )
    }
  }

  export default Signin;