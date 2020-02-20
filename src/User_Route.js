import React, { Component } from 'react';
import Header from './header.js';

import Footer from './Footer.js';
import { BrowserRouter , Route } from 'react-router-dom';
import './css/bootstrap.css';
import './css/css_slider.css';
import './css/style.css';
import App from './App.js';
import Signin from './Signin.js';
import Body from './Body.js';
import Customer from './Customer/User_home';
import { withRouter } from 'react-router-dom';



class UserRoute extends Component {
    render(){
      console.log('Users');
      return (
          <BrowserRouter> 
                <Header/>
                <Route exact path="/" component={Body}/> 
                <Route exact path="/App"  component={App} />
                <Route exact path="/Signin" component={Signin}/>
                <Route exact path="/Customer" component={Customer}/>
                
                <Footer/>
            </BrowserRouter>
      );
    }
}

export default UserRoute;
