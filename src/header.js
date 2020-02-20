import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/css_slider.css';
import './css/style.css';
import { Link, withRouter } from  'react-router-dom';
import {  } from "react-router-dom";


class Header extends Component{
    render() {
		console.log(this.props)
        return (
            <header>
			<div className="container-fluid">
				<div className="header d-md-flex justify-content-between align-items-center py-3 pl-2">
					
					<div id="logo">
						<h1><a href="#">The FoodExpress</a></h1>
					</div>
					
					<div className="nav_w3ls">
						<nav >
						
							<ul className="menu" >
								<li ><Link to="/" className="btn btn-outline" >Home</Link> </li>
								<li ><Link to="/App" target="" className="btn btn-outline">
										Login / Sign-Up</Link></li>
								<li ><button onClick={() => this.props.history.push('/Packages')} className="btn btn-outline">
										Packages</button></li>
							</ul>
						</nav>
					</div>
					
				</div>
			</div>
		</header>
        )
    }
}

export default  withRouter (Header);