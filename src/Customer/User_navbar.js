import React from 'react'
import './customer-css/cust.css'
import fire from '../config/fire'
import { Link } from  'react-router-dom';
class User_navbar extends React.Component{
    logout() {
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
                <a className="navbar-brand" href="#">The FoodExpress</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notification </a>
                        </li>
                       
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Options
                            </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button className="dropdown-item" onClick={this.logout} ><Link to="/App" style={{color: 'white'}} >Logout</Link></button>
                            <a className="dropdown-item" href="#">Profile</a>        
                        </div>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> </a>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
        </div>
        )
    }
}
export default User_navbar;