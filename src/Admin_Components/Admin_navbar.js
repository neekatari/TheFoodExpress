import React from 'react';
import { Link } from  'react-router-dom';

class Admin_navbar extends React.Component {
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
                            <Link to="/Admin/AdminDash" className="nav-link" ><li className="nav-item">
                                Home
                            </li></Link>
                           
                            <Link to="/Admin/AdminDash" className="nav-link" ><li className="nav-item">
                                Logout
                            </li></Link>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin_navbar;
