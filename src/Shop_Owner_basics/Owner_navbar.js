import React from 'react';
import { Link } from  'react-router-dom';

class Owner_navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">The FoodExpress</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link to="/Packages/Owner_dashboard" className="nav-link" ><li className="nav-item">
                                Home
                            </li></Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Manage Canteen </a>
                            </li>
                            <Link to="/Packages/Owner_Manage_order" className="nav-link" ><li className="nav-item">
                                Manage Order
                            </li></Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">View Profile</a>
                                <a className="dropdown-item" href="#">Logout</a>        
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

export default Owner_navbar;
