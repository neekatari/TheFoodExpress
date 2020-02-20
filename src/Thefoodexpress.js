import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './css/bootstrap.css';
import './css/css_slider.css';
import './css/style.css';
import Admin_Master from './Admin_Components/MasterPage'
import Owner_router from './Shop_Owner_basics/Owner_router';
import UserRoute from './User_Route';
import Packages from '../src/Shop_Owner_basics/Packages';
import Header from './header.js';
import AdminDash from './Admin_Components/AdminDash';
import ManagePackages from './Admin_Components/ManagePackages';
import Admin_navbar from './Admin_Components/Admin_navbar';
import Customer from './Customer/Cust_route';


class Thefoodexpress extends Component {
    render(){
      console.log('Main');
      return (
          <BrowserRouter>
            <div className="main-top" id="home"> 
            <Route path="/Packages" component={Owner_router}/>               
            <Route path="/Customer" component={Customer}/>
            <Route path="/" exact component={UserRoute} />
            <Route path="/Admin/AdminDash" component={Admin_navbar}/>  
            <Route exact path="/Admin" component={Admin_Master}/>
            <Route path="/Admin/AdminDash" exact component={AdminDash}/>
            <Route path="/Admin/AdminDash/ManagePackages" component={ManagePackages}/>
    
            </div>
            </BrowserRouter>
      );
    }
}

export default Thefoodexpress;
