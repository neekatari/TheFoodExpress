import React from 'react';
import User_navbar from './User_navbar'
import User_home from './User_home'
import Footer from '../Footer'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import User_canteen from './User_canteen'
import User_canteenlist from './User_canteenlist'
import Cart from './AddtoCart';



class Cust_route extends React.Component{
    render(){
        return(
            
            <BrowserRouter>
          
            <User_navbar/>
                <Switch>             
                <Route path="/Customer/canteen/:id" component={User_canteen}/> 
                <Route path="/Customer/User_canteenlist" component={User_canteenlist}/>
                <Route path="/Customer/cart" component={Cart}/>
                <Route exact path="/Customer" component={User_home}/>
               
               
              
                </Switch>
            {/* <Footer/> */}
               
          
            </BrowserRouter>
        )
    }
}

export default Cust_route;