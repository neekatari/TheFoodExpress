import React from 'react';
import fire from './config/fire';
import './App.css';
class Home extends React.Component{

    logout() {
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="up" >
                <h1 style={{margin: "20px"}}>you are loged in</h1>
                <button style={{margin: "20px"}} className="btn btn-outline" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;