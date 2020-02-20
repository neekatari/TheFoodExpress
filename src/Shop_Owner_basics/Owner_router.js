import React, { Component } from 'react';
import { BrowserRouter , Route, Switch ,browserHistory, IndexRouter } from 'react-router-dom';
import Packages from './Packages';
import Owner_Registration from './Owner_Registration'
import AddCategory from './AddCategory'
// import AddSubCategory from './AddSubCategory'
import AddItem from './AddItem' 
import DemoSub from './DemoAddSubCategory'; 
import Owner_dashboard from './Owner_dashboard';
import Owner_navbar from './Owner_navbar';
import Owner_Manage_order from './Owner_Manage_order';
import '../css/bootstrap.css';
import '../css/css_slider.css';
import '../css/style.css';

class Owner_router extends Component {
    render(){
      console.log('Owner');
      return (
          <BrowserRouter> 
               <Owner_navbar/>  
                <Route path="/Packages" exact component={Packages}/>
                <Route path="/Packages/Register_Owner" component={Owner_Registration}/> 
                <Route path="/Packages/AddCategory/:oid" component={AddCategory}/>
                <Route path="/Packages/AddSubCategory/:idd" component={DemoSub} />
                <Route path="/Packages/AddItem/:idd" component={AddItem}/>
                <Route path="/Packages/Owner_dashboard" component={Owner_dashboard}/>
                <Route path="/Packages/Owner_Manage_order" component={Owner_Manage_order}/>
          </BrowserRouter>
      );
    }

    
}



export default Owner_router;